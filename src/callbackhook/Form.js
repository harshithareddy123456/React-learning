import React, { useCallback, useState } from "react";
import { MemoisedTitle } from "./Tiltle";
import { MemoisedCount } from "./Count";
import { MemoisedButton } from "./Button";

function Form() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <MemoisedTitle />
      <MemoisedCount text="age" value={age}></MemoisedCount>
      <MemoisedButton handleClick={incrementAge}>
        handle age increment
      </MemoisedButton>
      <MemoisedCount text="salary" value={salary}></MemoisedCount>
      <MemoisedButton handleClick={incrementSalary}>
        handle salary increment
      </MemoisedButton>
    </div>
  );
}

export default Form;

//usecallback hook will return the memoised version of call back function that only changes only if one of the dependencies are changed
//useful when passing callback functions to the child components that reply on reference equality to prevent unnecessery rerenders
