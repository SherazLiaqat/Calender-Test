import React,{useRef} from 'react'

function Useref() {
    const inputRef=useRef(null);
    const click=()=>{
inputRef.current.value="";
    }
    return (
        <div>
            <h1>Userref</h1>
            <input type="text" placeholder="Ex..."  ref={inputRef}/>
            <button onClick={click}>change name</button>
        </div>
    )
}

export default Useref
