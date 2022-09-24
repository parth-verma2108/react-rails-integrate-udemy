import React, { Component } from 'react';
import './css/card.css'

class office extends Component {
  render() {
    return (
      <div className="devsubcat" id ='card'>
        <div className="card" style={{width: "21rem", height: '32rem', borderRadius: '0'}}>
          <div className="card-body">
            <ul style={{paddingLeft: "10px"}}>
              <li className="pb-2"><span>Microsoft</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Apple</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Google</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>SAP</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Oracle</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li><span>Other Office Productivity</span><span style={{float: 'right'}}>{'>'}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default office;