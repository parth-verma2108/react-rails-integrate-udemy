import React, { Component } from 'react';

class healthnav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark " style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Fitness</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>General Health</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Sports</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Nutrition {'&'} Diet</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Yoga</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Mental Health</span>
        </div>
      </nav>
    );
  }
}

export default healthnav;