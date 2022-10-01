import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/accountsecurity.css'
import Warning from './images/warning.svg'

class closeaccount extends Component {
  render() {
    return (
      <div>
      <div className='mt-4'>
        <div style={{fontWeight:'700', fontSize:'15px', color:'red', width: '34rem'}}>Warning:<span style={{color:'black', paddingLeft:'5px'}}>If you close your account, you will be unsubscribed from all your 9 courses, and will lose access forever.</span></div>
      </div>
      <div>
        <button className='btn btn-dark as-content' style={{borderRadius:'0', height:'2.5rem', width:'10rem', fontWeight:'700'}}>Close Button</button>
      </div>
      </div>
    );
  }
}

export default closeaccount;
