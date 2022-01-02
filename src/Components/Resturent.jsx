import React, { useState } from "react";
import Data from "./Data";
import "../App.css";
function Resturent() {
  const [data, setData] = useState(Data);
  const [names, setNames] = useState('irha');
  const [count, setCount] = useState(0);
  const handle=()=>{
    const Names= ["sheraz",'ali',"rehman"] ;
    const init=Math.floor(Math.random()*2);
    return Names[init];
  }
  const countclick=()=>{
setCount(count+1);
console.log(count)
  }
 const handleclick=(name)=>{
alert(`you click ${name}`)

 }
 const handleclick2=(e)=>{
 console.log(e.target.innerText)
  
   }
   const handleclick3=()=>{
     console.log('you click it')
   }
  const filterProduct = (cat) => {
    const updatedList = Data.filter((x) => {
      return x.category === cat;
    });

    setData(updatedList);
  };
  return (
    <div>
      <h2 onDoubleClick={handleclick3}> Hello {handle()}</h2>
      <button onClick={()=>handleclick('sheraz')}>click</button>
      <button onClick={(e)=>handleclick2(e)}>click2</button>
      <button onClick={()=>countclick()}>{count}</button>
      <nav
        className="navbar"
        style={{
          justifyContent: "center",
          margin: "20px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => setData(Data)}>
            All
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterProduct("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterProduct("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterProduct("lunch")}
          >
            Lunch
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {Data.map((elem) => (
            <div className="col-md-4 mb-4">
              <div class="card ">
                <img
                  src={elem.image}
                  className="card-img-top "
                  height="300px"
                  alt={elem.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{elem.name}</h5>
                  <p className="card-text">{elem.price}</p>
                  <p className="card-text">
                    {elem.description}...
                  </p>
                   <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resturent;
