import React from "react";

function Count({ text, value }) {
  console.log("this is count");
  return (
    <div>
      {text}={value}
    </div>
  );
}

export const MemoisedCount = React.memo(Count);
