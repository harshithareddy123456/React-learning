import React, { useEffect, useState } from "react";

export default function ComponentA() {
  const [count, setCount] = useState(0);
  const handlecount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 5) {
      throw new Error("not a hero!");
    }
  }, [count]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>count :{count}</div>
      <button onClick={handlecount}>increment A</button>
    </div>
  );
}
