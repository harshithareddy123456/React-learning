import React, { useEffect } from "react";
import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef}></input>;
}

//useref is used to persist the mutable data accross the functional component without unnecessary rerenders
