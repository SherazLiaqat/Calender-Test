import React from 'react'
import { AiFillDelete } from "react-icons/ai";
function Lineitem({ item, handlecheck, ondelete }) {
    return (
        <div>
            <li >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handlecheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handlecheck(item.id)}
              >
                {item.item}
              </label>
              <AiFillDelete
                role="button"
                tabIndex="0"
                onClick={() => ondelete(item.id)}
                aria-label={`Delete ${item.item}`}
              />
            </li>
        </div>
    )
}

export default Lineitem
