import React, { Component } from 'react';

class marketingnav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Digital Marketing</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Search Engine Optimization</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Social Media Marketing</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Branding</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Marketing Fundamentals</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Marketing analytics {'&'} Automation</span>
        </div>
      </nav>
    );
  }
}

export default marketingnav;