import React, { useState } from "react";

function CreateToDo(props) {
  const [toDoCategories, setToDoCategories] = useState([
    "Work/Professional",
    "Personal Development",
    "Home/Family",
    "Health and Wellness",
    "Miscellaneous",
  ]);

  const handleToDoChange = (event) => {
    const { name, value } = event.target;

    props.setToDoItem((prevToDoItem) => {
      return {
        ...prevToDoItem,
        [name]: value,
      };
    });
  };

  return (
    <div className="create-todo">
      <header>Add a task</header>
      <input
        placeholder="Task title"
        name="task"
        onChange={handleToDoChange}
        value={props.toDoItem.task}
      ></input>
      <textarea
        placeholder="Task details"
        rows="5"
        name="contents"
        onChange={handleToDoChange}
        value={props.toDoItem.contents}
      ></textarea>
      <div className="priority-container">
        <div>Task priority</div>
        <input
          type="range"
          min="0"
          max="100"
          id="taskPriority"
          name="priority"
          onChange={handleToDoChange}
          value={props.toDoItem.priority}
        ></input>
      </div>
      <select name="category" onChange={handleToDoChange}>
        <option value="" disabled>
          Select a category
        </option>
        {toDoCategories.map((category, key) => (
          <option key={key}>{category}</option>
        ))}
      </select>
      <button
        className="add-to-do"
        onClick={() => props.handleToDoSubmit(props.toDoItem)}
      >
        Add
      </button>
    </div>
  );
}

export default CreateToDo;
