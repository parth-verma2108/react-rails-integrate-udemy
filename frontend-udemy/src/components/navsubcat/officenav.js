import React, { Component } from 'react';

class officenav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Microsoft</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Apple</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Google</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>SAP</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Oracle</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Other Office Productivity</span>
        </div>
      </nav>
    );
  }
}

export default officenav;