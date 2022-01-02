import React, { useEffect, useState,useContext} from "react";
import {CartContext } from "../../CartContext";
import { Link, Outlet } from "react-router-dom";
import styles from'./Catalogue.module.css';

const catalogueRender =
  (loadingRenderer, productsRenderer, errorRenderer) => (productsRespose) => {
    if (productsRespose == "loading") {
      return loadingRenderer;
    }

    if (Array.isArray(productsRespose)) {
      return productsRenderer(productsRespose);
    }

    if (productsRespose.isError) {
      return errorRenderer(productsRespose);
    }
    console.error("illigal state", productsRespose);
  };

const loadingRenderer = "Loading";
const productRenderer = (product) => (
  <Link to={`/store/products/${product.id}`} key={product.id}>
    <div className= {styles["catalogue-item"]}>
        <span className={styles["category"]}>{product.category}</span>
        <span className={styles["description"]}>{product.description}</span>
        <img src={product.image} className={styles["image"]} />
        <span className={styles["price"]}>{product.price}</span>
    </div>
  </Link>
);

const renderProducts = (products) => products.map(productRenderer);

const errorRenderer = (response) => JSON.stringify(response);

const renderer = catalogueRender(
  loadingRenderer,
  renderProducts,
  errorRenderer
);

export default function Catalogue(props) {
  const [productsResponse, setProductsResponse] = useState("loading");

  const cart = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const products = await response.json();
          setProductsResponse(products);
          return;
        }
        const message = response.message;
        setProductsResponse({ message, isError: true });
      } catch ({ message }) {
        setProductsResponse({ message, isError: true });
      }
    };

    getProducts();
    return () => {};
  }, []);

  const changePrice = ()=> {
      cart.changePrice(100);
  }

  return <>
    <button onClick={changePrice}>Change Price$</button>
    {JSON.stringify(cart)}
    {renderer(productsResponse)}
    </>;
}
