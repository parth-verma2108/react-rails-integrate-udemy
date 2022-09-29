import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/loginForm"
import Signup from "../components/signupForm"
import ForgotPassword from "../components/forgotpassword";


class index extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route exact path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default index;