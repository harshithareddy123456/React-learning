import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";
import TodoCount from "./TodoCount";
import AddTodo from "./AddTodo";

const Maintodo = () => {
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);
  return (
    <div>
      <Todolist todos={todos} />
      <TodoCount todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
};

export default Maintodo;
