import React from "react";

export default function Hero({ heroName }) {
  if (heroName === "joker") {
    throw new Error("not a hero!");
  }
  return <div>{heroName}</div>;
}
