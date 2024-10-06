import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState();

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

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <>
      <section className="description">
        <h1>My To-Do List</h1>
      </section>
      <TodoInput
        handleAddTodo={handleAddTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
