import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export default function Addtodo(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title||!desc){
    alert("Title And description is required")
}
else{
    props.addTodo(title,desc)
    setTitle("");
    setDesc("");
}
if(title===title){
  alert("same")
}
    }
  return (
    <div>
      <Form className="container my-3" onSubmit={submit}>
        <h4>Add Todo</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description"  id="desc" value={desc}  onChange={(e)=>setDesc(e.target.value)}/>
        </Form.Group>

        <Button variant="success" type="submit" size="sm">
          Submit
        </Button>
      </Form>
    </div>
  );
}
