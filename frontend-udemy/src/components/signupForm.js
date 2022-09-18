import React, { Component } from 'react';
import './css/loginForm.css'
import Navbar from './navbar'
import axios from 'axios';
import { withRouter } from "react-router";

class signupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
  componentDidMount() {
    this.loginStatus()
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const {first_name, last_name, email, password, password_confirmation} = this.state
    let user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:3001/api/v1/users',{user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        console.log(response.data)
        this.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
        console.log(response.data.errors)
      }
    })
    .catch(error => console.log('api errors:', error))
    };

    redirect = () => {
      this.props.history.push('/');
    }
    handleErrors = () => {
      return (
        <div>
          <ul>{this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
          </ul> 
        </div>
      )
    };
    loginStatus = () => {
      axios.get('http://localhost:3001/api/v1/logged_in',
      {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }
    handleLogin = (data) => {
      this.setState({
        isLoggedIn: true,
        user: data.user
      })
    }
    handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
    }
  render() {
    const {first_name, last_name, email, password, password_confirmation} = this.state
    const options = [
      { value: 1, label: 'Student' },
      { value: 2, label: 'Instructor' }
    ]
    return (
      <div>
        <Navbar />
        <div className="title">
          <h2 className="title-content" style={{width: "20rem"}}>Sign up and start learning</h2>
        </div>
        <div>
          <form className="form-body" onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
            <input className="input-field" placeholder="First Name" type="text" value={first_name} onChange={(e)=>{this.setState({first_name: e.target.value})}}/><br />
            <input className="input-field" placeholder="Last Name" type="text" value={last_name} onChange={(e)=>{this.setState({last_name: e.target.value})}}/><br />
            <input className="input-field" id="email" placeholder="email" type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}}/><br />
            <input className="input-field" placeholder="password" type="password" value={password} onChange={(e)=>{this.setState({password: e.target.value})}}/><br />
            <input className="input-field" placeholder="password confirmation" type="password" value={password_confirmation} onChange={(e)=>{this.setState({password_confirmation: e.target.value})}}/><br />
            <button className="input-field btn btn-primary" type='submit'>Sign Up</button><br />
          </form>
        </div>
      </div>
    );
  }
}

export default signupForm;