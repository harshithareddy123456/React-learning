import React, { useState } from "react";

export default function Eventdelegation() {
  const [value, setvalue] = useState("");
  const handledelegation = (event) => {
    if (event.target.tagName === "BUTTON") {
      setvalue(event.target.textContent);
    }
  };
  return (
    <div onClick={handledelegation}>
      <button>button 1</button>
      <button>button 2</button>
      <button>button 3</button>
      <h1>{value}</h1>
    </div>
  );
}

//event delegation is a phenomena where we can avoid using multiple onclick events on child and provide one for parent

//event bubbling -- event bubbling is a mechanism in DOM where event is triggered on particular element will execute the
//particular event and bubble up through all the elements and execute the events on those elements if any and will reach up to
//the root of DOM
//we can use event.stoppropogation() to avoid event bubbling
