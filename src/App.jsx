import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState(["hello", "world", "Abay"]);

  // Function to add a new todo
  const handleAddTodo = (newTodo) => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]); // Add the new todo to the array
    }
  };

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
