import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
import ToDoCreationBar from './ToDoCreationBar'


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.toDoList
    } 
  }

  completeTask = (id) => {
    const newToDo = [...this.state.todos];
    newToDo[id].isCompleted = !newToDo[id].isCompleted;
    this.setState({
      todos: newToDo
    })
  }

  addToDo = (newTask, event) => {
    event.preventDefault();
    const cloneNewToDo = [...this.state.todos, newTask];
    this.setState({
      todos: cloneNewToDo
    })
  }

  render() {
    return (
      <div>
        <p><ToDoCreationBar addToDo={this.addToDo} /></p>
        {this.state.todos.map((item, index) => {
          return <li> <ToDoItem task={item.name} taskIndex={index} completeTask={this.completeTask} isCompletedStatus={item.isCompleted} /></li> 
        })}
      </div>
    );
  }
}

export default ToDoList;
