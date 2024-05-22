import React from "react";
const Tiltle = () => {
  console.log("this is title component");
  return <div>this is use callback example</div>;
};

export const MemoisedTitle = React.memo(Tiltle);
