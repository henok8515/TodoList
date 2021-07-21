import React from "react";
import "./Todo.css";

function Todo({ todos, toogleComplete, removeTodo }) {
  function handleCheckboxClicke() {
    toogleComplete(todos.id);
  }
  function handleRemoveClick() {
    removeTodo(todos.id);
  }
  return (
    <div className="todo-container">
      {console.log(toogleComplete)}
      {/* <input onClick={handleCheckboxClicke} type="checkbox" /> */}
      <li>{todos.task}</li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default Todo;
