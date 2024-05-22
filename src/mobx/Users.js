import { observer } from "mobx-react";
import { useState } from "react";

import React from "react";

const Users = observer(({ store }) => {
  const [inputValue, setInputvalue] = useState("");
  //   const [users, setUsers] = useState([]);
  const addUsers = () => {
    store.addUsers(inputValue);
    setInputvalue("");
  };
  return (
    <div>
      <h1>{store.total}</h1>
      <div>
        <input
          type="text"
          name="enter name"
          onChange={(e) => setInputvalue(e.target.value)}
          value={inputValue}
        ></input>
      </div>
      <button onClick={addUsers}>submit</button>
      {store.users.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
});

export default Users;
