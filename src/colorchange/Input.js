import React from "react";
import colorName from "color-name";
function Input({ colorvalue, setColorvalue,setHexvalue }) {
  return (
      <div>
      <h1>i am {Math.floor(Math.random()*20) }years old</h1>
    <form onSubmit={(e) => e.preventDefault}>
      
      <input style={{margin:'20px'}}
      autoFocus
        type="text"
        id="Additem"
        placeholder="Add Color Name"
        value={colorvalue}
        onChange={(e) => {
        setColorvalue(e.target.value);
       
        }}
        required
      />

     
    </form></div>
  );
}

export default Input;
