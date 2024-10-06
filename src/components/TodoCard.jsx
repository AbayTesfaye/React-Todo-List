function TodoCard(props) {
  const { children, handleDeleteTodo, todoId } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <div>
          <button>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDeleteTodo(todoId)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoCard;
