import React from "react";

const RenderToDoList = (props) => {
  const arr = props.arr;

  return (
    <div className="toDoListContainer">
      {arr.map((item, index) => (
        <div key={index} className="toDoElementGrid">
          <div>{item.task}</div>
          <div>{item.contents}</div>
          <div>{item.priority}</div>
          <div>{item.category}</div>
        </div>
      ))}
    </div>
  );
};

export default RenderToDoList;
