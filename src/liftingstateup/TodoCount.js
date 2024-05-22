import React from "react";

const TodoCount = (props) => {
  const { todos } = props;
  return <div>{todos.length}</div>;
};

export default TodoCount;
