import React, { Component, PureComponent } from "react";

class Purecom extends PureComponent {
  render() {
    console.log("pure comp");
    return <div>pure component {this.props.name}</div>;
  }
}

export default Purecom;
