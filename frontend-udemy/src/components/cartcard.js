import React, { Component } from 'react';

class cartcard extends Component {
  render() {
    return (
      <div className="mycard" id ='card'>
        <div className="card" style={{width: "15rem"}}>
          <div className="card-body">
            <div className="card-title" style={{fontWeight: '700',fontSize: '17px',
              textAlign: 'center'}}>Your cart is empty.</div>
            <div style={{fontWeight: '700', color: '#a435f0',
              textAlign: 'center'}}>Keep Shopping</div>
          </div>
        </div>
      </div>
    );
  }
}

export default cartcard;