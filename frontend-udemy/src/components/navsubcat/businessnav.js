import React, { Component } from 'react';

class businessnav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Entrepreuship</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Communication</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Management</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Sales</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Business Strategy</span>
        </div>
      </nav>
    );
  }
}

export default businessnav;