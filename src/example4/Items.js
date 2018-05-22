import React from "react";
import Item from "./Item";

const Items = props => (
  <ul>{props.items.map((item, index) => <Item key={index} {...item} />)}</ul>
);

export default Items;
