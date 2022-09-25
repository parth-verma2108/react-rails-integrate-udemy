import React, { Component } from 'react';

class designnav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark" style={{height: '2.5rem', position: 'absolute'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Web Design</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Graphic Design {'&'} Illustration</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Design Tools  </span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>User Experience Design</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Game Design</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>3D {'&'} Animation</span>
        </div>
      </nav>
    );
  }
}

export default designnav;