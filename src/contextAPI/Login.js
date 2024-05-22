import React from "react";
import { useContext } from "react";
import context from "./createContext";
export default function Login() {
  const { setshowprofile, setUsername } = useContext(context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        justifyContent: "center",
        margin: "auto",
        marginTop: "200px",
      }}
    >
      <input
        name="name"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input name="password" type="password" placeholder="password"></input>
      <button
        onClick={() => {
          setshowprofile(true);
        }}
      >
        Login
      </button>
    </div>
  );
}
