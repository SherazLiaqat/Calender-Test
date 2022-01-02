import React, { useState, useEffect,useContext } from "react";
import {CartContext, defaultValue as cartContextDefaultValue} from "./CartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Errorpage from "./pages/Errorpage";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Maincontent from "./pages/Maincontent";
import Additem from "./pages/Additem";
import Searchitem from "./pages/Searchitem";
import Reducer from "./pages/Reducer";
import Invoise from "./pages/Invoise";
import axios from "axios";
import { Navigate } from "react-router-dom";
import ToDo from "./pages/A-Comp/ToDo";
import Catalogue from "./pages/Store/Catalogue";
import Product from "./pages/Store/Product";

// function PrivateRoute({ children }) {
//   // const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }

function App() {
  const api_url = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewitem] = useState("");
  const [search, setSearch] = useState("");
  const [fetcherror, setFetchError] = useState(null);
  const setandsave = (newdata) => {
    setItems(newdata);
    localStorage.setItem("list", JSON.stringify(newdata));
  };
  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = { id, checked: false, item };
    const listitems = [...items, mynewItem];
    setandsave(listitems);
  };
  const handlecheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setandsave(listitems);
  };
  const ondelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setandsave(listitems);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    additem(newItem);
    setNewitem("");
    console.log("submit");
  };
  useEffect(() => {
    async function getData() {
      try {
        const Listdata = await axios.get(api_url);
        if (!Listdata.ok) throw Error("Did not received any data");
        setItems(Listdata);
        setFetchError(null);
        console.log(Listdata);
      } catch (error) {
        setFetchError(error.message);
        console.error(error);
      }
    }
    getData();
  }, []);

  


  const [cartData, setCartData] = useState(cartContextDefaultValue)
  
  const changePrice = (value)=> {
    const ncartData = {...cartData, totalPrice : value}
    setCartData(ncartData);
  }

  const data = {
    changePrice, 
    cartData : cartData
  }


  return (
    <CartContext.Provider value = {data}>
      <Router>
        <Link to="/store/products">store</Link>
        &nbsp;
        <Link to="/">home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/products" element={<Catalogue />} />
          <Route path="/store/products/:id" element={<Product />} />
        </Routes>
      </Router>
    </CartContext.Provider>

    //  <Router>
    //     <Navbar />
    //     <Searchitem search={search} setSearch={setSearch} />
    //     <Additem newItem={newItem} setNewitem={setNewitem} onsubmit={onsubmit} />
    //     <ToDo></ToDo>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/Profile/:username" element={<Profile />} />
    //       {/* <Route path="/About" element={<PrivateRoute>
    //             <About />
    //           </PrivateRoute>} /> */}
    //       <Route path="/Reducer" element={<Reducer />} />
    //       <Route path="/invoices" element={<Invoise />} />
    //       <Route
    //         path="*"
    //         element={
    //           <main style={{ padding: "1rem" }}>
    //             <p>There's nothing here!</p>
    //           </main>
    //         }
    //       />
    //       <Route
    //         path="/Main"
    //         element={
    //           <Maincontent
    //             items={items.filter((item) =>
    //               item.item.toLowerCase().includes(search.toLowerCase())
    //             )}
    //             handlecheck={handlecheck}
    //             fetcherror={fetcherror}
    //             ondelete={ondelete}
    //           />
    //         }
    //       />
    //       <Route path="*" element={<Errorpage />} />
    //     </Routes>
    //   </Router>
  );
}

export default App;

/* import { useState, useEffect } from "react";
import Calender from "./Calender/Calender";
import "./App.css";
import Demo from "./Demo";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./Components/Clock";
import Table from "./Components/Table";
import Table2 from "./Components/Table2";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import Addtodo from "./Components/Addtodo";
import Resturent from "./Components/Resturent";
import Practise from "./Components/Practise";
import Additem from "./Components/Additem";
import Square from "./colorchange/Square";
import Input from "./colorchange/Input";
function App() {
  //color change
  const [colorvalue, setColorvalue] = useState("");
  const [hexvalue, setHexvalue] = useState("");
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (list) => {
    setTodos(todos.filter((e) => e !== list));
  };
  localStorage.getItem("todos");
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const Mytodo = {
      sno: sno,
      title: title,
      desc,
      desc,
    };
    setTodos([...todos, Mytodo]);
    console.log("hello", Mytodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <Header /*title="To-Do-List" search={true} />
      <Square colorvalue={colorvalue}
      hexvalue={hexvalue}
      />
      <Input colorvalue={colorvalue}
      setColorvalue={setColorvalue}
      setHexvalue={setHexvalue}
      />

      <Practise />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />

      <Resturent />
        <Table/>
      <Table2 />
      <Calender data={{Name:'sheraz',age:'22',gender:'male'}}/>
      <Demo />
    </div>
  );
}

export default App;*/
