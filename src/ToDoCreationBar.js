import React, { Component } from "react";

class ToDoCreationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: {
        name: "",
        isCompleted: false
      }
    };
  }

  onChangeHandler = event => {
    this.setState({
      newToDo: {
        name: event.target.value.toLowerCase(),
        isCompleted: false
      }
    });
  };

  render() {
    return (
      <form id="form">
        <input
          type="text"
          placeholder="Add new todo"
          value={this.state.newToDo.name}
          onChange={this.onChangeHandler}
        />

        <button
          onClick={event => this.props.addToDo(this.state.newToDo, event)}
        >
          Add Todo
        </button>
      </form>
    );
  }
}

export default ToDoCreationBar;
