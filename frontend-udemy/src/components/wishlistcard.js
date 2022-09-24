import React, { Component } from 'react';
import './css/card.css'
class wishlistcard extends Component {
  render() {
    return (
      <div className="mycard" id ='card'>
        <div className="card" style={{width: "15rem"}}>
          <div className="card-body">
            <div className="card-title" style={{fontWeight: '700',fontSize: '17px',
              textAlign: 'center'}}>Your wishlist is empty.</div>
            <div style={{fontWeight: '700', color: '#a435f0',
              textAlign: 'center'}}>Explore Courses</div>
          </div>
        </div>
      </div>
    );
  }
}

export default wishlistcard;