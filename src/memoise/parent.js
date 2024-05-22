/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Child from "./child";
import { Memoisedchild } from "./child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sai");
  console.log("parent");
  const increment = () => {
    setCount(count + 1);
  };
  const changeName = () => {
    setName("harshitha");
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={changeName}>change name</button>
      <Memoisedchild name={name} />
    </div>
  );
};

export default Parent;

//react.memo helps us to not render the child when parent re renders which helps performance optimisation
