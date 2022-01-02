import React from 'react'

export default function TodoList({todoItems, onToDoDelete, onToDoComplete, ItemCom}) {
    
    const customItem =  (item, onDelte,onComplete) => <ItemCom key={item.id} 
                                                        item = {item}
                                                        onToDoDelete ={onDelte} 
                                                        onToDoComplete = {onComplete}>
                                                      </ItemCom> 

    const renderItem = (item) => 
                            <li
                                style={{textDecoration: (item.isCompleted ? "line-through" : "none")}}
                                key={item.id}
                                >
                                {item.label} 
                                    <button onClick={()=> onToDoDelete(item)}>Delete</button>
                                    <button onClick={()=> onToDoComplete(item)}>Completed</button>
                            </li>                        
    return (
        <ul>
            {
                ItemCom ? todoItems.map(item => customItem(item, onToDoDelete,onToDoComplete))
                        : todoItems.map(renderItem)
            }
        </ul>
    )
}
