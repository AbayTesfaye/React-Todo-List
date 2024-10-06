function TodoCard(props) {
  const { children, handleDeleteTodo, todoId, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button className="edit-btn" onClick={() => handleEditTodo(todoId)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="delete-btn" onClick={() => handleDeleteTodo(todoId)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
