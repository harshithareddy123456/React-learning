import React from "react";

function Button({ handleClick, children }) {
  console.log(`this is button ${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export const MemoisedButton = React.memo(Button);
