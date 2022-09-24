import React, { Component } from 'react';
import './css/card.css'

class businness extends Component {
  render() {
    return (
      <div className="devsubcat" id ='card'>
        <div className="card" style={{width: "21rem", height: '32rem', borderRadius: '0'}}>
          <div className="card-body">
            <ul style={{paddingLeft: "10px"}}>
              <li className="pb-2"><span>Entrepreuship</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Communication</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Management</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Sales</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Business Strategy</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Operations</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Project Management</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Business Law</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Business Management</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Human Resources</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Industries</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>E-commerce</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Media</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Real Estate</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li><span>Other Business</span><span style={{float: 'right'}}>{'>'}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default businness;