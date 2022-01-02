import React, { useState,useReducer } from "react";
import Usereducer from './Components/Usereducer';
import Useref from "./Components/Useref";
const reducer=(state,action)=>{
switch(action.type){
  case "INCREMENT":
    return{counter:state.counter+1,showtext:state.showtext}
    default:
      return state
}
}
function Demo() {
  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  const peoples=[ {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }]
  const [count, setCount] = useState(0);
  const[input,setInput]=useState("pedro");
  //this is usereducer state
  const[state,dispatch]=useReducer(reducer,{counter:0,showtext:false});
  const increment = () => {
    setCount (count + 1);
  };
  const onchange=(event)=>{
    setInput(event.target.value)
  }
  return (
    <div>
      {/*React hooks */}
      {/*useState */}
      
      <button onClick={increment}>click count{count}</button>
      <input placeholder="enter something" onChange={onchange}/>
      {input}
      {/*useResducer */}
      <h1>{state.counter}</h1>
      <button onclick={()=>{dispatch({type:"INCREMENT"});}}>
        use reducer
    </button>
    {!state.showtext && <p>this is a text</p>}
    {/*useResducer */}
    <Usereducer/>
    {/*useRef */}
    <Useref/>
    {/*filter method 1*/}
    <div>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
    {/*filter method 2*/}
    {peoples.filter(person => person.age < 60).map(filteredPerson => (
    <li>
      {filteredPerson.name}
    </li>
  ))}
    </div>
  );
}

export default Demo;
