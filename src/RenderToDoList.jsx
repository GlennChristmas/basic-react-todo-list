import React from "react";

const RenderToDoList = (props) => {
  const arr = props.arr;

  return (
    <div className="toDoListContainer">
      {arr.map((item, index) => {
        return (
          <div key={index} className="toDoElementGrid">
            <div className="task">{item.task}</div>
            <div className="contents">{item.contents}</div>
            <div className="priority">Priority rating: {item.priority}</div>
            <div className="category">Category: {item.category}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderToDoList;
