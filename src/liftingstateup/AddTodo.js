import React from "react";

const AddTodo = (props) => {
  const { setTodos } = props;
  const handleaddtodo = (e) => {
    if (e.keyCode === 13) {
      setTodos((prev) => [...prev, e.target.value]);
    }
  };
  return (
    <div>
      <input onKeyUp={handleaddtodo}></input>
    </div>
  );
};

export default AddTodo;
