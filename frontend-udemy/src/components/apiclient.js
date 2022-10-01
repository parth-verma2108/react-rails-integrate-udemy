import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/accountsecurity.css'
import Warning from './images/warning.svg'

class apiclient extends Component {
  render() {
    return (
      <div>
      <div className='mt-4'>
        <h2 style={{fontWeight:'700'}}>Affiliate APi</h2>
      </div>
      <div className='mt-4' style={{width:'40rem', border:'1px solid #dbdbdb', padding:'12px'}}>
        The Udemy Affiliate API exposes functionalities of Udemy to help developers build client applications and integrations with Udemy. To see more details, please visit <Link style={{color:'#5624d0'}}>Udemy Affiliate API</Link>
      </div>
      <div className='mt-4'>
        <button className='btn btn-light' style={{fontWeight:'800',border:'1px solid black', borderRadius:'0'}}>
          Request Affiliate API Client
        </button>
      </div>
      <div className='mt-4 d-flex' style={{border:'1px solid #cbcbcb', width:'38rem', height:'4rem'}}>
        <div className='p-3'><img src={Warning}/></div>
        <div className='p-3' style={{fontWeight:'900'}}>You don't have any API clients yet.</div>
      </div>
      </div>
    );
  }
}

export default apiclient;
