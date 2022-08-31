import React from "react";
import "./Login.css";
import { ThemeContext } from "./App";
function Login() {
  let { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div className={`${theme}-container`}>
      <form>
        <div className="input-group">
          <label>UserName</label>
          <input className="input-field" type="text" name="username" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input className="input-field" type="password" name="password" />
        </div>
        <button>Login</button>
        <span>currentTheme :{theme} </span>
        <div
          className="toggle-button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Switch Theme
        </div>
      </form>
    </div>
  );
}

export default Login;
