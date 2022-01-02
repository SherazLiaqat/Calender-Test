import React from "react";
import Lineitem from "./Lineitem";
function Itemlist({ items, handlecheck, ondelete }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Lineitem
            key={item.id}
            item={item}
            handlecheck={handlecheck}
            ondelete={ondelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default Itemlist;
