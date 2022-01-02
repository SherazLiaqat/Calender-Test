import React,{useState} from 'react'
import Parent from './Parent'
function Home() {
    const[name,setname]=useState('sheraz')
    const[count,setCount]=useState(0)
    const handleclick=()=>{
        alert('you clicked')
    }
    
    const handleclick2=(e)=>{
        setCount(count+1)
    }
    const handleclick3=()=>{
        const names=['sheraz','ali','rehman']
        const int=Math.floor(Math.random()*3)
        setname(names[int])
    }
    return (
        <div>
            this is home
            <p>Hello  {name}{count}</p>
            <button onClick={handleclick}>click it</button>
            <button onClick={(e)=>handleclick2(e)}>click it2</button>
            <button onClick={handleclick3}>change name</button>
            <Parent/>
        </div>
    )
}

export default Home
