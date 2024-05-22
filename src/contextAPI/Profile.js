import React from "react";
import context from "./createContext";
import { useContext } from "react";

export default function Profile() {
  const { username } = useContext(context);
  return (
    <>
      <h1>welcome {username}</h1>
    </>
  );
}
