import "./App.css";
import React, { useState } from "react";
import CreateToDo from "./CreateToDo";
import RenderToDo from "./RenderToDo";

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
      <RenderToDo toDoList={toDoList} />
    </div>
  );
}

export default App;
