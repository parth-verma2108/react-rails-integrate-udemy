import React, { Component } from 'react';
import './css/card.css'
class card extends Component {
  render() {
    return (
      <div className="mycard">
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight: '700',fontSize: '17px',
    textAlign: 'center'}}>Get your team access to over 17,000 top Udemy courses, anytime, anywhere.</h5>
            <button className="btn btn-dark" style={{borderRadius:'0', width:'16rem',     fontWeight: '700'}}type='submit'>Try Udemy Business</button>
          </div>
        </div>
      </div>
    );
  }
}

export default card;