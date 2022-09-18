import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/loginForm"
import Signup from "../components/signupForm"
class index extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     isLoggedIn: false,
  //     user: {}
  //    };
  // }
  // componentDidMount() {
  //   this.loginStatus()
  // }
  // loginStatus = () => {
  //   axios.get('http://localhost:3001/api/v1/logged_in',
  //   {withCredentials: true})
  //   .then(response => {
  //     if (response.data.logged_in) {
  //       this.handleLogin(response)
  //     } else {
  //       this.handleLogout()
  //     }
  //   })
  //   .catch(error => console.log('api errors:', error))
  // }
  // handleLogin = (data) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     user: data.user
  //   })
  // }
  // handleLogout = () => {
  //   this.setState({
  //   isLoggedIn: false,
  //   user: {}
  //   })
  // }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default index;