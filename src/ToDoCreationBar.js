import React, { Component } from "react";

class ToDoCreationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToDo: {
        name: "",
        isCompleted: false
      }
    };
  }

  onChangeHandler = event => {
    this.setState({
      addToDo: {
        name: event.target.value.toLowerCase(),
        isCompleted: false
      }
    });
  };

  render() {
    const name = this.state.addToDo.name;
    return (
      <form>
        <input
          type="text"
          placeholder="Add new task"
          value={name}
          onChange={this.onChangeHandler}
        />
        <button
          onClick={event => {
            this.props.addNewTask(this.state.addToDo, event);
          }}
        >
          Add todo
        </button>
      </form>
    );
  }
}

export default ToDoCreationBar;
