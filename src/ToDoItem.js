import React from "react";

const ToDoItem = props => {
  const { taskName, taskIndex, taskStatus, toggleTaskStatus } = props;
  let style = taskStatus === true ? "strikeThrough" : "";

  return (
    <div className={style} onClick={() => toggleTaskStatus(taskIndex)}>
      <li>{taskName}</li>
    </div>
  );
};

export default ToDoItem;
