import React, { useState } from "react";

export default function Debouncing() {
  const [word, setWord] = useState("");
  const handleKeyup = (e) => {
    setWord(e.target.value);
    console.log("Debounce", e.target.value);
  };

  const debouncefunc = (func, d) => {
    let timer;
    return function (e) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        func(e);
      }, d);
    };
  };
  const debouncefun = debouncefunc(handleKeyup, 300);
  return (
    <div>
      <input type="text" onKeyUp={(e) => debouncefun(e)}></input>
      <span>Debouncing:{word}</span>
    </div>
  );
}
