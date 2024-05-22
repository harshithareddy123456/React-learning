import React, { Suspense, lazy } from "react";
const Hoc = lazy(() => import("./hoc/hoc"));

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<div>not available</div>}>
        <Hoc />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
