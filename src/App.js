// import { useState } from "react";
import "./App.css";
// import Parent from "./memoise/parent";
// import Profile from "./contextAPI/Profile";
// import Login from "./contextAPI/Login";
// import context from "./contextAPI/createContext";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./redux/action";
// import UseReducer from "./usereducer/UseReducer";
// import Users from "./mobx/Users";
// import { userStore } from "./mobx/UserStore";

// // setInterval(() => {
// //   userStore.addUsers("foo");
// // }, 1000);
// import Parent from "./memoise/parent";
// import Memouse from "./memoise/Memouse";
// import FocusInput from "./useref/FocusInput";
// import Counterone from "./customhook/counterone";
// import Debouncing from "./DebouncingThrottling/Debouncing";
import Throttling from "./DebouncingThrottling/Throttling";
import Form from "./callbackhook/Form";
// import Promises from "./promises";
// import Promisesthen from "./promisesthen";
// import Axiofunc from "./axios";
// import Lifecycle from "./Lifecycle/lifecyclemethods";
// import Main from "./hoc/main";
// import Parentcomp from "./purecomponents/parentcomp";
//import Parent from "./errorboundary/Parent";
//import Controlledanduncontrolled from "./controlledanduncontrolled";
//import Errorboundaryexample1 from "./errorboundary/Errorboundaryexample1";
//import Eventdelegation from "./Eventdelegation";
// import Maintodo from "./liftingstateup/Maintodo";
import Callbackhrll from "./callbackhell/Callbackhrll";
function App() {
  //used these for contextAPI
  // const [profile, setshowprofile] = useState(false);
  // const [username, setUsername] = useState("");

  //reduxstore
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.count);
  return (
    <>
      {/* //{" "}
      <context.Provider value={{ setUsername, username, setshowprofile }}>
        // <div>{profile ? <Profile /> : <Login />}</div>
        //{" "}
      </context.Provider> */}
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button> */}
      {/* <Users store={userStore} /> */}
      {/* <Form /> */}
      {/* <Maintodo /> */}
      <Callbackhrll />
      {/* <Parent /> */}
      {/* <Form /> */}
    </>
  );
}

export default App;
