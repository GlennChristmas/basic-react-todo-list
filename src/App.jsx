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
    </div>
  );
}

export default App;
