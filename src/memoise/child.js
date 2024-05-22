import React from "react";

export default function Child({ name }) {
  console.log("child");
  return (
    <div>
      <div>this is {name}</div>
    </div>
  );
}

export const Memoisedchild = React.memo(Child);
