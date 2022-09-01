import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
export let ThemeContext = createContext(null);

function App() {
  let [store, setStore] = useState({
    theme: "light",
    user: {
      id: null,
      token: null,
      username: null,
      email: null,
    },
  });

  return (
    <ThemeContext.Provider value={{ store, setStore }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
