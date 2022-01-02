import React,{useRef} from "react";

function Additem({ newItem, setNewitem, onsubmit }) {
    const inputRef=useRef();
  return (
    <form onSubmit={onsubmit}>
      {/* <label htmlFor="addItem">Add Item</label>*/}
      <input
      ref={inputRef}
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e)=>setNewitem(e.target.value)}
        required
      />
      <button type="submit" aria-label="addItem"  onClick={()=>inputRef.current.focus()}>
        Submit
      </button>
    </form>
  );
}

export default Additem;
