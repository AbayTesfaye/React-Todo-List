import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos, handleDeleteTodo } = props;
  return (
    <ul className="main">
      {todos.map((todoItem, todoId) => (
        <TodoCard
          key={todoId}
          handleDeleteTodo={handleDeleteTodo}
          todoId={todoId}
        >
          <p>{todoItem}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

export default TodoList;
