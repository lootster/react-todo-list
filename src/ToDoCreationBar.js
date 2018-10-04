import React from 'react';

const ToDoCreationBar = (props) => {
  const {name, isCompleted} = props.item;

  return (
    <div>
      <input type="text" value="add task"/>
      <button onClick={()=> }>Add todo</button>
      <button>See all todos</button>
    </div>
  );
}

export default ToDoCreationBar;
