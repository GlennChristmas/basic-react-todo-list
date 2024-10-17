import "./App.css";
import React, { useState } from "react";
import CreateToDo from "./CreateToDo";
import RenderToDo from "./RenderToDo";
import CategorisationToggle from "./CategorisationToggle";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isCategorised, setIsCategorised] = useState(false);

  const handleToDoSubmit = (toDoItem) => {
    console.log(toDoItem.priority);
    setToDoList((prevToDoList) => {
      return [...prevToDoList, toDoItem];
    });
  };

  const handleCategoryClick = () => {
    setIsCategorised(!isCategorised);
  };

  return (
    <div>
      <CreateToDo handleToDoSubmit={handleToDoSubmit} />
      <CategorisationToggle
        isCategorised={isCategorised}
        handleCategoryClick={handleCategoryClick}
      />
      <RenderToDo toDoList={toDoList} />
    </div>
  );
}

export default App;
