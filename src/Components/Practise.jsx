import React from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Footer from "./Footer";
import Additem from "./Additem";
function Practise() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "this is my checklist and i want to show that",
    },
    {
      id: 2,
      checked: true,
      item: "this is my checklist2 and i want to show that",
    },
    {
      id: 3,
      checked: true,
      item: "this is my checklist3 and i want to show that",
    },
  ]);
  const number = [1, 2, 3, 4];
  const newnumber = [...number, 7, 9];
  console.log(newnumber);
  const filters = (...args) => {
    return args.filter((el) => el === 2);
  };
  console.log(filters(1, 2, 3));

  const ondelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };
  const handlecheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };
  const myarr=['eat','sleep','repeat']
  localStorage.setItem('store',myarr)
 
  return (
    <div>
      <Additem items={items}/>
      {items.length ? (
        <ul style={{ height: "100px" }}>
          {items.map((ite) => (
            <li className="item" key={ite.id}>
              <input
                type="checkbox"
                onChange={() => handlecheck(ite.id)}
                checked={ite.checked}
              />
              <label onDoubleClick={()=>handlecheck(ite.id)}>{ite.item}</label>
              <AiFillDelete
                role="button"
                tabIndex="0"
                onClick={() => ondelete(ite.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No more items to show</p>
      )}

      <Footer length={items.length} />
    </div>
  );
}

export default Practise;
