import React from 'react';

const ToDoItem = (props) => {

  let task = (props.isCompletedStatus === true) ? "task" : ""
  
  return (
    <div className={task} onClick={() => props.completeTask(props.taskIndex)}>
      {props.task}
    </div>
  );
}

export default ToDoItem;
