import React, { useState } from "react";

const RenderToDo = (props) => {
  const toDoList = props.toDoList;

  const priorityOrder = (arr) => {
    return arr.sort((a, b) => b.priority - a.priority);
  };

  const prioritisedToDoList = priorityOrder(toDoList);

  return (
    <div className="toDoListContainer">
      {prioritisedToDoList.map((item) => {
        return (
          <div className="toDoElementGrid">
            <div>{item.task}</div>
            <div>{item.contents}</div>
            <div>{item.priority}</div>
            <div>{item.category}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderToDo;
