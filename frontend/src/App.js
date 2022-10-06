import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarTop from "./routes/navbar/NavbarTop";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import RequireAuth from "./Components/RequireAuth";
import Frontpage from "./Pages/Frontpage";
import AdminSignUp from "./Pages/AdminSignup";
import AdminLogin from "./Pages/AdminLogin";
import Shop from './routes/shop/shop.component'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/home" element={<Frontpage />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
