import React, { Component } from 'react';

class musicnav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Instruments</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Music Production</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Music Fundamentals</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Vocal</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Music Techniques</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Music Software</span>
        </div>
      </nav>
    );
  }
}

export default musicnav;