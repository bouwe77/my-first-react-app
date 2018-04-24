import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Item item="Grasmaaien" />
        </li>
        <li>
          <Item item="Stofzuigen" />
        </li>
        <li>
          <Item item="Was opvouwen" />
        </li>
      </ul>
    );
  }
}

export default List;
