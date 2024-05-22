import React, { Component } from "react";

class Regularcomp extends Component {
  render() {
    console.log("reg component");
    return <div>regular component {this.props.name}</div>;
  }
}

export default Regularcomp;
