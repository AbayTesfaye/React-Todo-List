import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  // State to manage the list of todos and the current todo being edited
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Function to persist the data to localStorage
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  // Function to add a new todo
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList); // Use the newTodoList
    setTodos(newTodoList);
  }

  // Function to delete a todo
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoId) => todoId !== index);
    persistData(newTodoList); // Use the newTodoList
    setTodos(newTodoList);
  }

  // Function to edit a todo
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited); // Set the value to be edited in the input
    handleDeleteTodo(index); // Remove the todo from the list temporarily
  }

  // Load todos from localStorage on the initial render
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos).todos;
      setTodos(parsedTodos);
    }
  }, []);

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
