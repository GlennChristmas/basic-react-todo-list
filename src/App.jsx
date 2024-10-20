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
  const [toDoItem, setToDoItem] = useState({
    task: undefined,
    contents: undefined,
    priority: undefined,
    category: undefined,
  });

  const handleToDoSubmit = (toDoItem) => {
    //handle blanks in toDoItem
    const isEmptyFieldsScoped = Object.values(toDoItem).some(
      (value) => value === undefined || value === null || value == ""
    );
    //problem is due to state isEmptyFields's setter being async, having setToDoList dependent on it doesn't guarantee
    //it will be negated. As such, I've had to use a const scoped to handleToDoSubmit as it *won't* be async and therefore
    //must be evaluated before setToDoList can be executed - blocking empty to do items!
    //I update the state isEmptyFields below as we use the state in a ternary operator to display a warning below.
    setIsEmptyFields(() => isEmptyFieldsScoped);

    if (!isEmptyFieldsScoped) {
      setToDoList((prevToDoList) => {
        return [...prevToDoList, toDoItem];
      });
      setToDoItem({
        task: "",
        contents: "",
        priority: "",
        category: "",
      });
    }
  };

  const handleCategoryClick = () => {
    setIsCategorised(!isCategorised);
  };

  return (
    <div>
      <CreateToDo
        handleToDoSubmit={handleToDoSubmit}
        setToDoItem={setToDoItem}
        toDoItem={toDoItem}
      />
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
