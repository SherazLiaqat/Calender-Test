import React,{useState,useReducer} from 'react'

function reducer(state,action){
switch(action.type){
case'INCREMENT':
return{count:state.count+1,state:state.showtext};
case 'DECREMENT':
    return{count:state.count-1,showtext:state.showtext}
case 'SHOWTEXT':
    return{count:state.count,showtext:!state.showtext}  
    
    default:
      return state;  
}
}
function Usereducer() {
    const [state, dispatch] = useReducer(reducer, {count:0,showtext:true});
    return (
        <div>
          <h1>{state.count}</h1>
          
          <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
          <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
        </div>
    )
}

export default Usereducer
