import React, { Component } from 'react';
import './css/card.css'

class devSubCat extends Component {
  render() {
    return (
      <div className="devsubcat" id ='card'>
        <div className="card" style={{width: "21rem", height: '32rem', borderRadius: '0'}}>
          <div className="card-body">
            <ul style={{paddingLeft: "10px"}}>
              <li className="pb-2"><span>Web Development</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Data Science</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Mobile Development</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Programming Languages</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Game Development</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Database Design {'&'} Development</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Software Testing</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Software Engineering</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Lifestyle</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li className="pb-2"><span>Software Development Tools {'&'} Video</span><span style={{float: 'right'}}>{'>'}</span></li>
              <li><span>No-Code Development</span><span style={{float: 'right'}}>{'>'}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default devSubCat;