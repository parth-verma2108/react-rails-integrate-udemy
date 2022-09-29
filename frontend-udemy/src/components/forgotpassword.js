import React, { Component } from 'react';
import Navbar from './navbar'
import './css/forgotPassword.css'
import { Link } from 'react-router-dom';
import Footer from './footer'

class forgotpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: ''
     };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password} = this.state
    let user = {
      email: email,
      password: password
    }
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

  render() {
    const {email} = this.state
    return (
      <div>
        <Navbar />
        <div className="title">
          <h2 className="fp-title-content" style={{width: "20rem"}}>Forgot Password</h2>
        </div>
        <div>
          <form className="form-body" onSubmit={this.handleSubmit} style={{textAlign: "center",     padding: '24px 50px 24px 16px'}}>
            <input className="input-field input-width" id="email" placeholder="email" type="email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}}/><br />
            <button className="input-field btn input-width" type='submit' style={{borderRadius: '0', backgroundColor:'#a435f0', color:'white', fontFamily: 'inherit', fontWeight:'800'}}>Reset Password</button><br />
            <div>
              <div className='pt-3' style={{fontFamily:'Arial'}}>
                or <Link to="/login" style={{color:'#5624d0', fontWeight:'800'}}>Log In</Link>
              </div>    
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default forgotpassword;