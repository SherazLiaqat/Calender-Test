import React , {useState} from 'react'
import ToDoEditor from './ToDoEditor'
import ToDoList from './TodoList'


let id = 5;

const initialStateTodoItems = [
    {label : "Need to sleep", isCompleted : false, id:1},
    {label : "Need to Learn React", isCompleted : false,id:2},
    {label : "Need to ELM", isCompleted : false,id:3},
    {label : "Need to Node JS", isCompleted : false,id:4},
    {label : "Need to Grphql", isCompleted : false,id:5}
] 


const CustomItemRenderer = 
    ({ item, onToDoDelete, onToDoComplete}) =>
    <li
        style={{textDecoration: (item.isCompleted ? "underline" : "none")}}
        key={item.id}
        >
        {item.label} 
            <button onClick={()=> onToDoDelete(item)}>Delete</button>
            <button onClick={()=> onToDoComplete(item)}>Completed</button>
    </li>
                



export default function ToDo() {

    const [todoItems, setTodoItems] = useState(initialStateTodoItems)
    const [useCustomComponent, setUseCustomComponent] = useState(false)

    const toDoAdded = (value)=> {
        const todo = {label:value, isCompleted : false, id: ++ id}
        const nToDos = [todo, ...todoItems]
        setTodoItems(nToDos);
        return true;
    }

    const toDoCompleted = (item)=> {
        item.isCompleted= true;
        setTodoItems([...todoItems]);
    }

    const toDoRemoved = (item)=> {
        const nToDos = todoItems.filter(x=>x !== item);
        setTodoItems(nToDos);
    }

    return (
        <>
        <input type="checkbox" label='Use Custom component' onChange={({target:{checked}})=> setUseCustomComponent(checked)}/>
         <ToDoEditor onAddToDo = {toDoAdded} ></ToDoEditor>
         <ToDoList 
            todoItems= {todoItems}
            onToDoDelete= {toDoRemoved} 
            onToDoComplete= {toDoCompleted}
            ItemCom = {useCustomComponent ? CustomItemRenderer : null}></ToDoList>
        </>
    )
}
