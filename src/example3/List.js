import React from "react";
import Item from "./Item";

const List = () => (
  <ul>
    <li>
      <Item description="Grasmaaien" />
    </li>
    <li>
      <Item description="Stofzuigen" />
    </li>
    <li>
      <Item description="Was opvouwen" />
    </li>
  </ul>
);

export default List;
