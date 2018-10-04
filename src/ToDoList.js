import React, { Component } from 'react';
import {todos} from "./seedData"
import {ToDoItem} from "./ToDoItem"
import ToDoCreationBar from "./ToDoCreationBar"
import ToDoFilterBar from "./ToDoFilterBar"

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos
    }
  }

  handleClick = (id) => {
    const todos = [...this.state.todos];
    todos[id].isCompleted = !todos[id].isCompleted;
    this.setState({
      todos
    })
  }

  render() {
    const toDoList = this.state.todos.map((element, index)=>{
      return <ToDoItem key={index} item={element} handleClick={this.handleClick} index={index}/>
    })

    return (
      <div>
        <p>
          <ToDoCreationBar item={this.state.todos}/>
        </p>
        <p>
          <ToDoFilterBar />
        </p>
        <ul>
          {toDoList} 
        </ul>
      </div>
    );
  }
}

export default ToDoList;
