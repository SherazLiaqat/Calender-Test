import { style } from "@mui/system";
import React from "react";
import Todoitem from "./Todoitem";
export default function Todos(props) {
  return (
    <div className="container my-3">
      <h3>Todo List</h3>
      <hr/>
{ props.todos.length===0 ?(<p style={{fontSize:'20px'}}>No more data to display!</p>):
      props.todos.map((todo) => (
        <Todoitem list={todo} key={todo.sno} remove={props.onDelete} />
      ))
      }
    </div>
  );
}
