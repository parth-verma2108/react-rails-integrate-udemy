import React, { Component } from 'react';

class itnav extends Component {
  render() {
    return (
      <nav class="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>IT Certifications</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Network {'&'} Security</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Hardware</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Operating System {'&'} Servers</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Other IT {'&'} Software</span>
        </div>
      </nav>
    );
  }
}

export default itnav;