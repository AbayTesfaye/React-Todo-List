import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  function handleAddTodo(newTodo) {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]); // Add the new todo to the array
    }
  }

  function handleDeleteTodo(index) {
    const newTodo = todos.filter((todo, todoId) => {
      return todoId !== index;
    });
    setTodos(newTodo);
  }

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
