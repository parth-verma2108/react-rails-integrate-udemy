import React, { Component } from 'react';
import './css/loginForm.css';
import Navbar from './navbar';
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from './footer';

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
        window.location.href="/"
      } else {
        this.setState({
          errors: response.data.errors
        })
        console.log(response.data.errors)
      }
    })
    .catch(error => console.log('api errors:', error))
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
    }

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
          <form className="form-body" onSubmit={this.handleSubmit} style={{textAlign: "center",     padding: '0 50px 24px 16px'}}>
            <input className="input-field input-width" placeholder="First Name" type="text" value={first_name} onChange={(e)=>{this.setState({first_name: e.target.value})}}/><br />
            <input className="input-field input-width" placeholder="Last Name" type="text" value={last_name} onChange={(e)=>{this.setState({last_name: e.target.value})}}/><br />
            <input className="input-field input-width" id="email" placeholder="email" type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}}/><br />
            <input className="input-field input-width" placeholder="password" type="password" value={password} onChange={(e)=>{this.setState({password: e.target.value})}}/><br />
            <input className="input-field input-width" placeholder="password confirmation" type="password" value={password_confirmation} onChange={(e)=>{this.setState({password_confirmation: e.target.value})}}/><br />
            <button className="input-field input-width btn" type='submit' style={{borderRadius: '0', backgroundColor:'#a435f0', color:'white', fontFamily: 'inherit', fontWeight: '800'}}>Sign up</button><br />
            <div>
              <div className='pt-3' style={{fontFamily:'Arial',fontSize:'10px', borderBottom: '1px solid #d9d0d0', paddingBottom:'1rem', fontSize: '15px'}}>
                By signing up, you agree to our Terms of Use and Privacy Policy.
              </div>
              <div className='pt-3' style={{fontFamily:'Arial', fontSize: '15px'}}>
              Already have an account? <Link to="/login" style={{textDecoration:'none',color:'#5624d0', fontSize: '15px'}}> Log in</Link>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default signupForm;
