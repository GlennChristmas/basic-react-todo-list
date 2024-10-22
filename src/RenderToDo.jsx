import React from "react";
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
    return categoryMap;
  };

  const prioritisedToDoList = priorityOrder(toDoList);

  if (props.isCategorised) {
    categorisedToDoLists = splitIntoCategoryArrays(prioritisedToDoList);
  } else if (!props.isCategorised) {
    categorisedToDoLists = { uncategorised: prioritisedToDoList };
  }

  return (
    <div>
      {Object.entries(categorisedToDoLists).map((value, index) => (
        <div key={value[0]} className="to-do-display-container">
          <div className="category-title">
            {props.isCategorised ? value[0] : ""}
          </div>
          <RenderToDoList arr={value[1]} />
        </div>
      ))}
    </div>
  );
};

export default RenderToDo;
