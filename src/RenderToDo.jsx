import React, { useState } from "react";

const RenderToDo = (props) => {
  const toDoList = props.toDoList;

  const priorityOrder = (arr) => {
    return arr.sort((a, b) => b.priority - a.priority);
  };

  const splitIntoCategoryArrays = (arr) => {
    const categoryMap = {};

    arr.forEach((element) => {
      const category = element.category;

      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }

      categoryMap[category].push(element);
    });
    return Object.values(categoryMap);
  };

  if (props.isCategorised) {
    const splitArrays = splitIntoCategoryArrays(toDoList);
    console.log(splitArrays);
  }

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
