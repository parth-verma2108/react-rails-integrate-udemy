import React from 'react';
import './css/loginForm.css'
import Navbar from './navbar'
import axios from 'axios';
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
  };

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
  };

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
          <hr style={{width: "20rem"}}/>
        </div>
        <div>
          <form className="form-body" onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
            <input className="input-field" id="email" placeholder="email" type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}}/><br />
            <input className="input-field" placeholder="password" type="password" value={password} onChange={(e)=>{this.setState({password: e.target.value})}}/><br />
            <button className="input-field btn" type='submit' style={{borderRadius: '0', backgroundColor:'#a435f0', color:'white',     fontFamily: 'inherit'}}>Login</button><br />
          </form>
        </div>
      </div>
    );
  }
}

export default loginForm;