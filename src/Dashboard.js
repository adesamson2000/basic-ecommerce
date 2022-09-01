import React from "react";

import { ThemeContext } from "./App";
function Dashboard() {
  let { store, setStore } = React.useContext(ThemeContext);
  return (
    <div>
      <p>Dashboard Token {store.user.token} </p>
      <p>name {store.user.data.name.firstname}</p>
    </div>
  );
}

export default Dashboard;
