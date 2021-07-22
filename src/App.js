import React, { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import "./App.css";
import { Typography } from "@material-ui/core";
const Local_Storage_key = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(Local_Storage_key));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_Storage_key, JSON.stringify(todos));
  }, [todos]);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  function toogleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todos.id === id) {
          return {
            ...todos,
            completed: !todo.completed,
          };
        }
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todos) => todos.id !== id));
  }
  return (
    <div className="app-container">
      <Typography
        variant="h2"
        style={{
          padding: 16,
        }}
      >
        Add Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        removeTodo={removeTodo}
        todos={todos}
        toogleComplete={toogleComplete}
      />
    </div>
  );
}

export default App;
