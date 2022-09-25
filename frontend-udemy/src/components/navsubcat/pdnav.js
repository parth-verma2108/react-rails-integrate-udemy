import React, { Component } from 'react';

class pdnav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Personal Transformation</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Personal Productivity</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Leadership</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Career Development</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Parenting {'&'} Relationships</span>
        </div>
      </nav>
    );
  }
}

export default pdnav;