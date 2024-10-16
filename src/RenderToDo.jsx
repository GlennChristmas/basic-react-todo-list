import React, { useState } from "react";

const RenderToDo = (props) => {
  const toDoList = props.toDoList;

  return (
    <div className="toDoListContainer">
      {toDoList.map((item) => {
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
