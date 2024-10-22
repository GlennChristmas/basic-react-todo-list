import "./App.css";
import React, { useState } from "react";
import CreateToDo from "./CreateToDo";
import RenderToDo from "./RenderToDo";
import CategorisationToggle from "./CategorisationToggle";
import EmptyFieldsWarning from "./EmptyFieldsWarning";
import Header from "./Header";
import Footer from "./Footer";

const defaultToDoItem = {
  task: "",
  contents: "",
  //set these to default as a value needs to exist in initial render - I appreciate it's a bit hacky!
  priority: 50,
  category: "Work/Professional",
};

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isCategorised, setIsCategorised] = useState(false);
  const [isEmptyFields, setIsEmptyFields] = useState(false);
  const [toDoItem, setToDoItem] = useState(defaultToDoItem);

  const handleToDoSubmit = (toDoItem) => {
    //handle blanks in toDoItem
    const isEmptyFieldsScoped = Object.values(toDoItem).some(
      (value) => value === false
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
        ...defaultToDoItem,
        category: toDoItem.category,
      });
    }
  };

  const handleCategoryClick = () => {
    setIsCategorised(!isCategorised);
  };

  return (
    <div className="content-container">
      <Header />
      <div className="to-do-container">
        <div className="to-do-grid">
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
