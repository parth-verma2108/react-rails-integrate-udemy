import React, { Component } from 'react';

class subcatnav extends Component {
  render() {
    return (
      <nav class="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Web Development</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Mobile Development</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Programming Languages</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Game Development</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Database Design {'&'} Development</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Software Testing</span>
        </div>
      </nav>
    );
  }
}

export default subcatnav;