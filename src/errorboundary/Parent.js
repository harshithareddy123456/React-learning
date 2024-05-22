import React, { Component } from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

class Parent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Parent;
