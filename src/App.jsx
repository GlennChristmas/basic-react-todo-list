import "./App.css";
import React, { useState } from "react";
import CreateToDo from "./CreateToDo";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleToDoSubmit = (toDoItem) => {
    console.log(toDoItem.priority);
    setToDoList((prevToDoList) => {
      return [...prevToDoList, toDoItem];
    });
  };

  return (
    <div>
      <CreateToDo handleToDoSubmit={handleToDoSubmit} />
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
    </div>
  );
}

export default App;
