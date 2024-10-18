import React, { useState } from "react";
import RenderToDoList from "./RenderToDoList";

const RenderToDo = (props) => {
  const toDoList = props.toDoList;
  let categorisedToDoLists = [];

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

  const prioritisedToDoList = priorityOrder(toDoList);

  if (props.isCategorised) {
    categorisedToDoLists = splitIntoCategoryArrays(prioritisedToDoList);
  } else if (!props.isCategorised) {
    //note the nesting
    categorisedToDoLists = [[...prioritisedToDoList]];
  }

  return (
    <div>
      {categorisedToDoLists.map((item, index) => (
        <div>
          <div>{props.isCategorised ? item[0].category : ""}</div>
          <RenderToDoList key={index} arr={item} />
        </div>
      ))}
    </div>
  );
};

export default RenderToDo;
