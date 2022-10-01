import React, { Component } from 'react';
import Edit from './images/edit.svg'
import './css/accountsecurity.css'

class accountsecurity extends Component {
  render() {
    return (
      <div>
      <div>
        <form className="form-body" style={{textAlign: "left", padding:'0'}}>
          <div className="as-content">Email:</div>
          <input className="input-field input-width ps-3" style={{width: '35rem'}} id="email" placeholder="email" type="email" value='p@gmail.com'/><img src={Edit}/><br />
          <div className="as-content">Password:</div>
          <input className="input-field input-width ps-3" style={{width: '35rem'}} placeholder="password" type="password" value='*********' onChange={(e)=>{this.setState({password: e.target.value})}}/><img src={Edit}/><br />
        </form>
      </div>
      <div style={{width:'35rem', border:'1px solid #dbdbdb', paddingLeft:'10px'}}>
        <div className="as-content">Multi-factor Authentication</div>
        <p>Increase your account security by requiring that a code emailed to you be entered when you log in. For more information on how multi-factor authentication works, refer to our Help Center article.</p>
        <div style={{textAlign:'center'}}>
          <button className='btn btn-dark as-content' type='submit' style={{borderRadius:'0', marginTop:'0', alignContent:'center'}}>Enable</button>
        </div>
      </div>
      </div>
    );
  }
}

export default accountsecurity;