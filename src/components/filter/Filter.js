import React from "react";

const Filter = ({ nameFilter }) => (
  <div>
    <h2>Find contact by name</h2>
    <input type="text" onChange={nameFilter} />
  </div>
);

export default Filter;
