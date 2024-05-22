import React from "react";
import { useState } from "react";

export default function ComponentB() {
  const [count, setCount] = useState(0);
  const handlecount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>count :{count}</div>
        <button onClick={handlecount}>increment B</button>
      </div>
    </div>
  );
}
