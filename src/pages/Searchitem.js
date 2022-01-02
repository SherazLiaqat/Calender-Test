import React from "react";

function Searchitem({ search, setSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        id="search"
        type="text"
        placeholder="Search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
    </form>
  );
}

export default Searchitem;
