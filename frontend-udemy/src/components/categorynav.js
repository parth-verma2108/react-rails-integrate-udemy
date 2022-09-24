import React, { Component } from 'react';
import './css/categorynav.css'

class categorynav extends Component {
  render() {
    return (
      <nav class="navbar bg-light" style={{height: '2.5rem', boxShadow:' 2px -7px 18px 0px'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Development</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Business</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Finance {'&'} Accounting</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>It {'&'} Software</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Office Productivity</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Personal Development</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Design</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Marketing</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Health {'&'} Fitness</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem'}}>Music</span>
        </div>
      </nav>
    );
  }
}

export default categorynav;