import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const productRender =
  (loadingRenderer, productRenderer, errorRenderer) => (productRespose) => {
    if (productRespose == "loading") {
      return loadingRenderer;
    }

    if (productRespose.id) {
      return productRenderer(productRespose);
    }

    if (productRespose.isError) {
      return errorRenderer(productRespose);
    }
    console.error("illigal state", productRespose);
  };

const loadingRenderer = "Loading";
const productRenderer = (product) => (
  <>
    <span>{product.category}</span>
    <span>{product.description}</span>
    <img src={product.image} />| <span>{product.price}</span>
  </>
);

const errorRenderer = (response) => JSON.stringify(response);

const renderer = productRender(loadingRenderer, productRenderer, errorRenderer);

export default function Product() {
  const [productResponse, setProductResponse] = useState("loading");

  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        if (response.ok) {
          const produt = await response.json();
          setProductResponse(produt);
          return () => {};
        }
        setProductResponse(response);
      } catch ({ message }) {
        setProductResponse({ message, isError: true });
      }
    };

    getProducts();
    return () => {};
  }, []);

  return renderer(productResponse);
}
