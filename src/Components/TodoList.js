import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";
function TodoList({ todos, toogleComplete, removeTodo }) {
  return (
    <div>
      <List>
        {todos.map((todos) => (
          <Todo
            key={Todo.id}
            todos={todos}
            toogleComplete={toogleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
