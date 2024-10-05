import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todoItem, todoId) => (
        <TodoCard key={todoId}>
          <p>{todoItem}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

export default TodoList;
