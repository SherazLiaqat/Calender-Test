import React,{useState} from 'react'

function About() {
    const [input, setinput] = useState("text")

    const handlechange=()=>{
        
        const names=['ali','sheraz','ali55']
        const int=Math.floor(Math.random()*2)
        return names[int];
    }
    const onchange=(e)=>{
        const newvalue=e.target.value;
           setinput(newvalue)
    }
    return (
        <div>
            this is about{handlechange()}
            <input type="text " placeholder='enter text'  onChange={onchange}/>
       <p>{input}</p>
        </div>
    )
}

export default About
