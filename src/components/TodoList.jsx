import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;
  return (
    <ul className="main">
      {todos.map((todoItem, todoId) => (
        <TodoCard
          key={todoId}
          handleDeleteTodo={handleDeleteTodo}
          todoId={todoId}
          handleEditTodo={handleEditTodo}
        >
          <p>{todoItem}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

export default TodoList;
