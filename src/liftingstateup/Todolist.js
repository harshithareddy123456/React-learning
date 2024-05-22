import React from "react";

const Todolist = (props) => {
  const { todos } = props;
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
};

export default Todolist;
