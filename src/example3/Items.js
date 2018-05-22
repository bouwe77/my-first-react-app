import React from "react";
import Item from "./Item";

class Items extends React.Component {
  state = {
    items: [
      { description: "Grasmaaien" },
      { description: "Stofzuigen" },
      { description: "Was opvouwen" }
    ]
  };

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => <Item key={index} {...item} />)}
      </ul>
    );
  }
}

export default Items;
