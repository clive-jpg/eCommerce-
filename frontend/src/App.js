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
import Checkout from "./routes/checkout/checkout.component";
import ErrorPage from "./Pages/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home2 from "./Components/Home/home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home2 />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/shop" element={<RequireAuth><Shop /></RequireAuth>} />
        <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path ="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
