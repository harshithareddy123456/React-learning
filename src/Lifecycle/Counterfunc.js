import React, { useEffect } from "react";

function Counterfunc(props) {
  useEffect(() => {
    console.log("counter functional updated");
    return () => {
      console.log("unmounted func");
    };
  }, [props.number]);
  return <div>{props.number}</div>;
}

export default Counterfunc;
