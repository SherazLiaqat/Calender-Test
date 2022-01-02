import React, { useReducer,useEffect,useState } from "react";
import axios from "axios";
const initialState = { showtext: false,count:0 };

function reducer(state,action){
switch(action.type){
    case 'Increment':
        return{count:state.count+1,showtext:state.showtext}
        case 'Decrement':
            return{count:state.count-1,showtext:state.showtext}
            case 'Toggle':
            return{count:state.count,showtext:!state.showtext}
            
}

}

function Reducer() {
    const [data,setData] = useState([])
    useEffect(() => {
      
        axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(function (response) {
    // handle success
    setData(response.data)
    console.log('data call');
  })
     }, [])
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
       
      this is reducer<h1 >{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "Toggle" });
        }}
      >
        Reducer

      </button>
      <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
      
      {state.showtext && <p>This is text</p>}
    </div>
  );
}

export default Reducer;
