import React, { useState } from "react";
import { useRef } from "react";

export default function Controlledanduncontrolled() {
  const [value, setvalue] = useState("");
  const selectref = useRef();
  const handlesubmit = () => {
    const current = selectref.current.value;
    setvalue(current);
  };
  return (
    <div>
      <select ref={selectref}>
        <option value="">please select value</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <button onClick={handlesubmit}>submit</button>
      <div>{value}</div>
    </div>
  );
}

// Controlled Components:
// In controlled components, form elements like <input>, <textarea>, and <select> are controlled by React state.
// The value of the form element is controlled by React state, and any changes to the value are handled by updating the state.
// Whenever the user interacts with the form element (e.g., types in an input field or selects an option in a dropdown), React updates the state, and the component re-renders with the new value.
// Controlled components provide a single source of truth for the form data, making it easy to manage and synchronize the form state with other parts of the application.
// Uncontrolled Components:
// In uncontrolled components, form elements are managed by the DOM itself rather than React state.
// The value of the form element is not controlled by React state. Instead, you rely on the DOM to maintain and update the value.
// You can still access the current value of the form element using a ref after the component has mounted, but React does not track or manage its changes.
// Uncontrolled components are useful when you want to integrate with non-React code or libraries, or when you want to work with form elements without managing their state in React.
