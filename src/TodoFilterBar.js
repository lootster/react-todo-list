import React, { Component } from "react";

class TodoFilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChangeHandler = event => {
    this.setState({
      value: event.target.value.toLowerCase()
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter search"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        <button onClick={event => this.props.filter(this.state.value, event)}>
          Filter
        </button>
        <button onClick={event => this.props.filter(null, event)}>
          See All todos
        </button>
      </form>
    );
  }
}

export default TodoFilterBar;
