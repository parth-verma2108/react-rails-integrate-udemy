import React, { Component } from 'react';
import './css/card.css'

class IT extends Component {
  render() {
    return (
      <div className="devsubcat" id ='card'>
        <div className="card" style={{width: "21rem", height: '32rem', borderRadius: '0'}}>
          <div className="card-body">
            <ul style={{paddingLeft: "10px"}}>
              <li className="pb-2"><span>IT Certifications</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Network {'&'} Security</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Hardware</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Operating System {'&'} Servers</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li><span>Other IT {'&'} Softwares</span><span style={{float: 'right'}}>{'>'}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default IT;