import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>WELCOME TO MY FAKE STORE</h1>
      <Link to="/login">Link to Login page</Link>

      <Link to="/notfound">Notfound</Link>
    </div>
  );
}

export default Home;
