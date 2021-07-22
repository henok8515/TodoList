import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@material-ui/core";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value, completed: false });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task"
        required
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default TodoForm;
