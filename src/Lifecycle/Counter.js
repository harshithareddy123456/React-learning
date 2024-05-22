import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevprops, prevState) {
    if (prevprops.number !== this.props.number) {
      console.log("component updated");
    }
  }
  render() {
    return <div>{this.props.number}</div>;
  }
}

export default Counter;
