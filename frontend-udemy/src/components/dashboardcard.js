import React, { Component } from 'react';

class dashboardcard extends Component {
  render() {
    return (
      <div className="dashcard" id ='card'>
        <div className="card" style={{width: "25rem", boxShadow: '0px 0px 20px grey', borderRadius: '0'}}>
          <div className="card-body">
            <h1 className="card-title" style={{fontWeight: '700',fontSize: '27px',
               fontFamily:'Times'}}>Learning that gets you</h1>
            <h1 className="card-title" style={{fontSize: '20px', fontFamily:'Calibri'}}>Skills for your present (and your future). Get started with us.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboardcard;