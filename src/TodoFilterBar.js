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
          placeholder="Filter todos List"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        <button
          onClick={event => this.props.filterTask(this.state.value, event)}
        >
          Filter
        </button>
        <button onClick={event => this.props.filterTask(null, event)}>
          See all todos
        </button>
      </form>
    );
  }
}

export default TodoFilterBar;
