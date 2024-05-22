import React, { Component } from "react";
import Counter from "./Counter";
import Counterfunc from "./Counterfunc";
class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("component is mounted");
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    return (
      <>
        <Counterfunc number={this.state.count} />
        <button onClick={() => this.increment()}>submit</button>
      </>
    );
  }
}
export default Lifecycle;
//here we can use bind or arrow functions for functions
