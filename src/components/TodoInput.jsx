import { useState } from "react";

function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;
  // State to track the input value

  return (
    <header>
      <input
        value={todoValue} // Set input value from state
        onChange={(e) => setTodoValue(e.target.value)} // Update state on input change
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue); // Add the todo using the function passed via props
          setTodoValue(""); // Clear the input field after adding the todo
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
