import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toogleComplete, removeTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todos) => (
          <Todo
            key={Todo.id}
            todos={todos}
            toogleComplete={toogleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
