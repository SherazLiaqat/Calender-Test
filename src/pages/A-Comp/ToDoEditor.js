import React, {useState} from 'react'




export default function ToDoEditor({onAddToDo}) {
    
    const [toDo, setToDo] = useState('') 

    let valueChanged = ({target:{value}}) => {
        setToDo(value);
    }

    let todoAdded = ()=>{
        const clearIt = onAddToDo(toDo);
        if(clearIt)
        {
            setToDo("");
        }
    }
    

    return (
        <>
        <input value = {toDo} onChange={valueChanged}/>
        <button disabled={!toDo} onClick={todoAdded}>Add ToDo</button>
        </>
    )
}
