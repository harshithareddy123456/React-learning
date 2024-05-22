import React from "react";

export default function Hoc(Component) {
  return class extends React.Component {
    state = {
      auth: true,
    };
    render() {
      return (
        <div>
          {this.state.auth ? <Component name="name" /> : <h1>Please login</h1>}
        </div>
      );
    }
  };
}

//a higher component is a advanced concept in react for reusing component logic
//a higher order component is a pure function with zero side effects and doesnt modify the input component
//HOC is a function that takes component as input and returns new component
