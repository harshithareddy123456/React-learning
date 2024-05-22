//code splitting is something where a huge javascript bundle is split into smaller chunks or modules,instead of rendering
//entire code base upfront,code splitting allows you to only load the code that is necessary for intial page load

//code splitting can be run at run time or build time ,it can be achieved throught various tools and techniques such as
//dynamic imports,webpack codesplitting features,or using react libraries react.lazy(),or suspense

//lazy loading on the other hand is a special use case of code splitting ,where we load resources only when they are needed

//dynamic import
import React, { Suspense } from "react";
const Home = React.lazy(() => import("../codesplitting/Home"));
const Login = React.lazy(() => import("../codesplitting/Login"));

export default function Codesplitting() {
  return (
    <div>
      <Suspense fallback={<div>loading....</div>}>
        <Home />
      </Suspense>
    </div>
  );
}
