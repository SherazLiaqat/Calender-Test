import React, { useState } from "react";
import { createContext } from "react";


import Childa from "./Childa";
export const mydata=createContext(null)


function Parent() {
  const [val, setval] = useState()
  //data from child to parent
  function datafromchild(data) {
    setval(data) 
  }
  const [fname, setfname] = useState("sheraz");
  const [lname, setlname] = useState("ahmad1");
  return (
    
     <mydata.Provider  value={fname , lname}>
      
        <div>This is a Parent component</div>
        <h2>{val}</h2>
        <br />
        <Childa alert={datafromchild}/>
      
        </mydata.Provider>
  );
}

export default Parent;

