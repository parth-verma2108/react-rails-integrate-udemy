import React, { Component } from 'react';

class financenav extends Component {
  render() {
    return (
      <nav class="navbar bg-dark" style={{height: '2.5rem'}}>
        <div className='align-center'>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Accounting {'&'} Bookkkeeping</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Cryptocurrency {'&'} Blockchain</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Finance</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Finance Modelling {'&'} Analysis</span>
          <span style={{fontSize: '12px', paddingLeft: '2rem', color: 'white'}}>Investing {'&'} Trading</span>
        </div>
      </nav>
    );
  }
}

export default financenav;