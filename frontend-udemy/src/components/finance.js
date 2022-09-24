import React, { Component } from 'react';
import './css/card.css'

class finance extends Component {
  render() {
    return (
      <div className="devsubcat" id ='card'>
        <div className="card" style={{width: "21rem", height: '32rem', borderRadius: '0'}}>
          <div className="card-body">
            <ul style={{paddingLeft: "10px"}}>
              <li className="pb-2"><span>Accounting {'&'} Bookkeeping</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Compliance</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Cryptocurrency {'&'} Blockchain</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Economics</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Finance</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Finance Cert {'&'} Exam Prep</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Financial Modelling {'&'} Analysis</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Investing {'&'} Trading</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Money Management Tools</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Taxes</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li><span>Other Finance {'&'} Accounting</span><span style={{float: 'right'}}>{'>'}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default finance;