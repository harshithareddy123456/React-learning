import React, { useState } from "react";

export default function Throttling() {
  const [word, setWord] = useState("");
  const [flag, setFlag] = useState(true);

  const handleKeyup = (e) => {
    console.log(e.target.value);
    setWord(e.target.value);
  };

  const throttlefunc = (func, limit) => {
    console.log(flag);
    return function (...args) {
      if (flag) {
        func(...args);
        setFlag(false);
        setTimeout(() => {
          setFlag(true); // Reset flag after the throttling period
        }, limit);
      }
    };
  };

  const throttle = throttlefunc(handleKeyup, 300);

  return (
    <div>
      <input type="text" onKeyUp={(e) => throttle(e)}></input>
      <div>Throttle value: {word}</div>
    </div>
  );
}
