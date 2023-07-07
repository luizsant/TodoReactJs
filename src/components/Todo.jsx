import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p className="titulo">{todo.text}</p>
        <p className="category">{todo.category}</p>
      </div>
      <div>
        <button className="btnComplete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="btnCancel" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
