import React, { Component } from 'react';

class teachonudemycard extends Component {
  render() {
    return (
      <div className="mycard" id ='card'>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight: '700',fontSize: '17px',
              textAlign: 'center'}}>Turn what you know into an opportunity and reach millions around the world.</h5>
            <button className="btn btn-dark" style={{borderRadius:'0', width:'16rem', fontWeight: '700'}}type='submit'>Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default teachonudemycard;