//error boundary component will catch javascript errors anywhere in their child component tree and display a fall back UI
import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ExampleErrorBoundary from "./ExampleErrorBoundary";
import ErrorBoundary from "./ErrorBoundary";

export default function Errorboundaryexample1() {
  return (
    <ExampleErrorBoundary>
      <ComponentA />
      {/* <br />
        <hr />
        <ComponentB /> */}
    </ExampleErrorBoundary>
  );
}
