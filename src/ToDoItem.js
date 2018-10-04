import React from 'react';

export const ToDoItem = (props) => {
  const {name, isCompleted} = props.item;
  
  let toDoStatus = "";
  if (isCompleted === true) {
   toDoStatus = "strikeOffTask"
  }

  return (
    <div>
      <li onClick={()=> props.handleClick(props.index)} className={toDoStatus}>
      {name}
      </li>
    </div>
  );
}


