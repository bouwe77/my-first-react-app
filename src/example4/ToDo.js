import React from "react";
import Items from "./Items";
import Form from "./Form";

class ToDo extends React.Component {
  state = {
    items: [
      { description: "Grasmaaien" },
      { description: "Stofzuigen" },
      { description: "Was opvouwen" }
    ]
  };

  addItem = item => {
    this.setState({ items: [...this.state.items, { description: item }] });
  };

  render() {
    return (
      <div className="content">
        <h3>TO DO</h3>
        <Items items={this.state.items} />
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default ToDo;
