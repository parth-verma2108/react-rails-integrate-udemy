import React from 'react';
import './css/loginForm.css';
import Navbar from './navbar';
import axios from 'axios';
import { Link } from  'react-router-dom';
import Footer from './footer'

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
      isLoggedIn: false,
      user : {}
     };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password} = this.state
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/api/v1/login', 
    {user}, 
    {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response.data)
        window.location.href="/"
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  render() {
    const {email, password} = this.state
    return (
      <div>
        <Navbar />
        <div className="title">
          <h2 className="title-content" style={{width: "20rem"}}>Log in to your Udemy account</h2>
          <hr style={{width: "20rem", margin:'0', paddingLeft: '22rem'}}/>
        </div>
        <div>
          <form className="form-body" onSubmit={this.handleSubmit} style={{textAlign: "center", padding: '24px 50px 24px 16px'}}>
            <input className="input-field input-width" id="email" placeholder="email" type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}}/><br />
            <input className="input-field input-width" placeholder="password" type="password" value={password} onChange={(e)=>{this.setState({password: e.target.value})}}/><br />
            <button className="input-field input-width btn" type='submit' style={{borderRadius: '0', backgroundColor:'#a435f0', color:'white', fontFamily: 'inherit', fontWeight: '800'}}>Login</button><br />
            <div>
              <div className='pt-3' style={{fontFamily:'Arial', fontSize: '15px'}}>
                or <Link to="/forgot_password" style={{textDecoration:'none',color:'#5624d0', fontSize: '15px'}}>Forgot password</Link>
              </div>
              <div className='pt-3' style={{fontFamily:'Arial', color:'#5624d0', fontSize: '15px'}}>Log in to a different account</div>
              <div className='pt-4' style={{fontFamily:'Arial', fontSize: '15px'}}>Don't have an account? <Link to="/sign_up" style={{color:'#401b9c', fontWeight: '700', textDecoration: 'underline', fontSize: '15px'}}>Sign up</Link></div>
              <div className='pt-2 ' style={{fontFamily:'Arial', color:'#401b9c', fontWeight: '700', fontSize: '15px'}}>Log in with your organization</div>     
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default loginForm;
