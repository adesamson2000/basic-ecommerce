import React from "react";
import axios from "axios";
import "./Login.css";
import { ThemeContext } from "./App";
import { useNavigate } from "react-router-dom";
function Login() {
  let { store, setStore } = React.useContext(ThemeContext);
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <div className={`${store.theme}-container`}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await axios.post(
            "https://fakestoreapi.com/auth/login",
            form
          );
          const Newresponse = await axios.get(
            "https://fakestoreapi.com/users/1"
          );
          setStore((store) => {
            return {
              ...store,
              user: { ...Newresponse, token: response.data.token },
            };
          });
          navigate("/dashboard");
        }}
      >
        <div className="input-group">
          <label>UserName</label>
          <input
            value={form.username}
            className="input-field"
            type="text"
            name="username"
            onChange={(event) =>
              setForm((form) => {
                return { ...form, [event.target.name]: event.target.value };
              })
            }
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            value={form.password}
            className="input-field"
            type="password"
            name="password"
            onChange={(event) =>
              setForm((form) => {
                return { ...form, [event.target.name]: event.target.value };
              })
            }
          />
        </div>
        <button className="button">Login</button>
        <span>currentTheme :{store.theme} </span>
        <button
          type="button"
          className="toggle-button"
          onClick={() => {
            setStore((store) => {
              return {
                ...store,
                theme: store.theme === "light" ? "dark" : "light",
              };
            });
          }}
        >
          Switch Theme
        </button>
      </form>
    </div>
  );
}

export default Login;
