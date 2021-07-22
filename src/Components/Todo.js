import React from "react";
import "./Todo.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, ListItem, Typography } from "@material-ui/core";
function Todo({ todos, toogleComplete, removeTodo }) {
  function handleCheckboxClicke() {
    toogleComplete(todos.id);
  }
  function handleRemoveClick() {
    removeTodo(todos.id);
  }
  return (
    <ListItem className="todo-container">
      {console.log(toogleComplete)}
      {/* <input onClick={handleCheckboxClicke} type="checkbox" /> */}
      <Typography variant="body1">{todos.task}</Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
