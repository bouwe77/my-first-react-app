import React from "react";
import Item from "./Item";

class List extends React.Component {
  state = {
    items: [
      { id: 1, description: "Grasmaaien" },
      { id: 2, description: "Stofzuigen" },
      { id: 3, description: "Was opvouwen" }
    ]
  };

  render() {
    return (
      <ul>{this.state.items.map(item => <Item key={item.id} {...item} />)}</ul>
    );
  }
}

export default List;
