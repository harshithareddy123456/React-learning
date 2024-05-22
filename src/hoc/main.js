import React from "react";
import Hoc from "./hoc";

function Main(props) {
  return <div>welcome harshitha for hoc and {props.name}</div>;
}

export default Hoc(Main);
