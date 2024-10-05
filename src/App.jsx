import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";
function App() {
  const todos = ["hello", "world", "Abay"];
  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
