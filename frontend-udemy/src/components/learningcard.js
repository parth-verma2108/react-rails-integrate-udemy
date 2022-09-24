import React, { Component } from 'react';
import './css/card.css'
class learningcard extends Component {
  render() {
    return (
      <div className="mycard" id ='card'>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight: '700',fontSize: '17px',
              textAlign: 'center'}}>Start learning from over 204,000 courses today.</h5>
            <button className="btn btn-light" style={{borderRadius:'0', width:'16rem', fontWeight: '700', border: '1px solid black'}}type='submit'>Browse Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default learningcard;