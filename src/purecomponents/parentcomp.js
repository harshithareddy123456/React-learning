import React, { Component } from "react";
import Regularcomp from "./regularcomp";
import Purecom from "./purecom";

class Parentcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "harshitha",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "sai harshitha" });
    }, 2000);
  }
  render() {
    console.log("parent comp");
    return (
      <div>
        parent component
        <Regularcomp name={this.state.name} />
        <Purecom name={this.state.name} />
      </div>
    );
  }
}

export default Parentcomp;

//a regular component does not implement the shouldcomponentupdate method ,it always returns true
//a pure component on the other hand implements shouldcomponentupdate with shallow props and state comparsion
//to prevent unnecessary rerenders and improve performance boost
//in functional components we can do by doing react.memo,usememo,usecallback
//it is good idea to ensure that all the children components are also pure to avoid unexpected behaviour
