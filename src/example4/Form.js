import React from "react";

class Form extends React.Component {
  state = {
    description: ""
  };

  handleDescriptionChange({ target }) {
    this.setState({
      description: target.value
    });
  }

  handleClick = () => {
    this.props.addItem(this.state.description);
    this.setState({
      description: ""
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={e => this.handleDescriptionChange(e)}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Form;
