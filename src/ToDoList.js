import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import ToDoCreationBar from "./ToDoCreationBar";
import TodoFilterBar from "./TodoFilterBar";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.toDoList,
      filterToDos: []
    };
  }

  completedTask = id => {
    const newToDo = [...this.state.todos];
    newToDo[id].isCompleted = !newToDo[id].isCompleted;
    this.setState({
      todos: newToDo
    });
  };

  addTask = (newTask, event) => {
    event.preventDefault();
    const newToDo = [...this.state.todos, newTask];
    this.setState({
      todos: newToDo
    });
  };

  filterTask = (filter, event) => {
    event.preventDefault();
    const filteringToDo = [...this.state.todos];
    //console.log(filter);
    if (filter === null) {
      this.setState({
        filterToDos: []
      });
    } else {
      const filteredToDos = filteringToDo.filter(item =>
        item.name.includes(filter)
      );
      this.setState({
        filterToDos: filteredToDos
      });
    }
  };

  render() {
    const { todos, filterToDos } = this.state;
    console.log(filterToDos);
    const chooseListToDisplay = filterToDos.length > 0 ? filterToDos : todos;

    const displayingToDosList = chooseListToDisplay.map((item, index) => {
      return (
        <li>
          <ToDoItem
            task={item.name}
            taskIndex={index}
            completeTask={this.completedTask}
            isCompletedStatus={item.isCompleted}
          />
        </li>
      );
    });

    return (
      <div>
        <p>
          <ToDoCreationBar addToDo={this.addTask} />
        </p>
        <p>
          <TodoFilterBar filterTask={this.filterTask} />
        </p>
        <p>{displayingToDosList}</p>
      </div>
    );
  }
}

export default ToDoList;
