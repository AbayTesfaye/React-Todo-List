function TodoCard({ children }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <i className="fa-solid fa-pen-to-square"></i>{" "}
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
}

export default TodoCard;
