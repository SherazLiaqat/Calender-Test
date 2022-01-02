import React from "react";

import Itemlist from "./Itemlist";
function Maincontent({ items, handlecheck, ondelete,fetcherror }) {
  return (
    
    <>
    {fetcherror &&<p style={{color:"red"}}>{ `Error: ${fetcherror}`}</p>}
      {items.length === 0 ? (
        <p>No more data to show</p>
      ) : (
        <Itemlist   items={items} handlecheck={handlecheck} ondelete={ondelete} />
      )}
    </>
  );
}

export default Maincontent;
