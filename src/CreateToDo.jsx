import React, { useState } from "react";

function CreateToDo(props) {
  const [toDoItem, setToDoItem] = useState({});

  const [toDoCategories, setToDoCategories] = useState([
    "Work/Professional",
    "Personal Development",
    "Home/Family",
    "Health and Wellness",
    "Miscellaneous",
  ]);

  const handleToDoChange = (event) => {
    const { name, value } = event.target;

    setToDoItem((prevToDoItem) => {
      return {
        ...prevToDoItem,
        [name]: value,
      };
    });
  };

  return (
    <div className="create-todo">
      <header>Add task</header>
      <input
        placeholder="Task title"
        name="task"
        onChange={handleToDoChange}
      ></input>
      <textarea
        placeholder="Task details"
        rows="5"
        name="contents"
        onChange={handleToDoChange}
      ></textarea>
      <div class="priority-container">
        <div>Task priority</div>
        <input
          type="range"
          min="0"
          max="100"
          id="taskPriority"
          name="priority"
          onChange={handleToDoChange}
        ></input>
      </div>
      <select name="category" onChange={handleToDoChange}>
        {toDoCategories.map((category) => (
          <option>{category}</option>
        ))}
      </select>
      <button onClick={() => props.handleToDoSubmit(toDoItem)}>Add</button>
    </div>
  );
}

export default CreateToDo;
