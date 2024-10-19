import "./App.css";
import React, { useState } from "react";
import CreateToDo from "./CreateToDo";
import RenderToDo from "./RenderToDo";
import CategorisationToggle from "./CategorisationToggle";
import EmptyFieldsWarning from "./EmptyFieldsWarning";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isCategorised, setIsCategorised] = useState(false);
  const [isEmptyFields, setIsEmptyFields] = useState(false);

  const handleToDoSubmit = (toDoItem) => {
    //handle blanks in toDoItem
    setIsEmptyFields(
      Object.values(toDoItem).some((value) => value === undefined)
    );

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
      {isEmptyFields ? <EmptyFieldsWarning /> : null}
      <CategorisationToggle
        isCategorised={isCategorised}
        handleCategoryClick={handleCategoryClick}
      />
      <RenderToDo toDoList={toDoList} isCategorised={isCategorised} />
    </div>
  );
}

export default App;
