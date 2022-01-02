import React from 'react'
import {Button} from 'react-bootstrap';
function Todo({list,remove}) {
    return (
        <div>
           <h4>{list.title}</h4>
           <p>{list.desc}</p>
           <Button variant="danger s"size="sm" onClick={()=>{remove(list)}}>Delete</Button>
        </div>
    )
}

export default Todo
