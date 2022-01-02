import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function Additem({ items }) {
  const [newitem, setNewitem] = useState("");
  const setandsave = (newitems) => {};
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewitem = { id, checked: false, item };
    const listitems = [...items, myNewitem];
    setNewitem(listitems);
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (!newitem) return;
    addItem(newitem);
    setNewitem("");
    console.log(newitem);
  };

  return (
    <form onSubmit={handlesubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Add Item</Form.Label>
        <Form.Control
          type="text"
          id="Additem"
          placeholder="Add Item"
          value={newitem}
          onChange={(e) => setNewitem(e.target.value)}
          required
        />
      </Form.Group>

      <button variant="primary" type="submit" aria-label="additem">
        Submit
      </button>
    </form>
  );
}

export default Additem;
