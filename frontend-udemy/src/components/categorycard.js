import React, { Component } from 'react';
import Development from './development'
import Bussiness from './businness'
import Finance from './finance'
import IT from './IT'
import Office from './office'
import './css/card.css'

class categorycard extends Component {

  developmentvisibleDisplay = () => {
    var visible = document.getElementById('development')
    console.log(visible)
    visible.style.display = 'block'
  }

  developmenthideDisplay = () => {
    var visible = document.getElementById('development')
    console.log(visible)
    visible.style.display = 'none'
  }

  bussinessvisibleDisplay = () => {
    var visible = document.getElementById('bussiness')
    console.log(visible)
    visible.style.display = 'block'
  }

  bussinesshideDisplay = () => {
    var visible = document.getElementById('bussiness')
    console.log(visible)
    visible.style.display = 'none'
  }

  financevisibleDisplay = () => {
    var visible = document.getElementById('finance')
    console.log(visible)
    visible.style.display = 'block'
  }

  financehideDisplay = () => {
    var visible = document.getElementById('finance')
    console.log(visible)
    visible.style.display = 'none'
  }

  itvisibleDisplay = () => {
    var visible = document.getElementById('it')
    console.log(visible)
    visible.style.display = 'block'
  }

  ithideDisplay = () => {
    var visible = document.getElementById('it')
    console.log(visible)
    visible.style.display = 'none'
  }

  officevisibleDisplay = () => {
    var visible = document.getElementById('office')
    console.log(visible)
    visible.style.display = 'block'
  }

  officehideDisplay = () => {
    var visible = document.getElementById('office')
    console.log(visible)
    visible.style.display = 'none'
  }

  pdvisibleDisplay = () => {
    var visible = document.getElementById('pd')
    console.log(visible)
    visible.style.display = 'block'
  }

  pdhideDisplay = () => {
    var visible = document.getElementById('pd')
    console.log(visible)
    visible.style.display = 'none'
  }

  designvisibleDisplay = () => {
    var visible = document.getElementById('design')
    console.log(visible)
    visible.style.display = 'block'
  }

  designhideDisplay = () => {
    var visible = document.getElementById('design')
    console.log(visible)
    visible.style.display = 'none'
  }

  marketingvisibleDisplay = () => {
    var visible = document.getElementById('marketing')
    console.log(visible)
    visible.style.display = 'block'
  }

  marketinghideDisplay = () => {
    var visible = document.getElementById('marketing')
    console.log(visible)
    visible.style.display = 'none'
  }
  render() {
    return (
      <div className="categorycard" id ='card'>
        <div className="card" style={{width: "18rem", borderRadius: '0', height: '32rem'}}>
          <div className="card-body">
            <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
              <ul style={{paddingLeft: "10px"}}>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Development</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.bussinessvisibleDisplay} onMouseLeave={this.bussinesshideDisplay}><span>Business</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.financevisibleDisplay} onMouseLeave={this.financehideDisplay}><span>Finance {'&'} Accounting</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.itvisibleDisplay} onMouseLeave={this.ithideDisplay}><span>IT {'&'} Software</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.officevisibleDisplay} onMouseLeave={this.officehideDisplay}><span>Office Productivity</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Personal Development</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Design</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Marketing</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Lifestyle</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Photography {'&'} Video</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Health {'&'} Fitness</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li className="pb-2" onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay}><span>Music</span><span style={{float: 'right'}}>{'>'}</span></li>
                <li><span>Teaching {'&'} Academics</span><span style={{float: 'right'}}>{'>'}</span></li>
              </ul>
              <div id='development' onMouseEnter={this.developmentvisibleDisplay} onMouseLeave={this.developmenthideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <Development />
              </div>
              <div id='bussiness' onMouseEnter={this.bussinessvisibleDisplay} onMouseLeave={this.bussinesshideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <Bussiness />
              </div>
              <div id='finance' onMouseEnter={this.financevisibleDisplay} onMouseLeave={this.financehideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <Finance />
              </div>
              <div id='it' onMouseEnter={this.itvisibleDisplay} onMouseLeave={this.ithideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <IT />
              </div>
              <div id='office' onMouseEnter={this.officevisibleDisplay} onMouseLeave={this.officehideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <Office />
              </div>
              <div id='development' onMouseEnter={this.devsubcatvisibleDisplay} onMouseLeave={this.devsubcathideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <Development />
              </div>
              <div id='development' onMouseEnter={this.devsubcatvisibleDisplay} onMouseLeave={this.devsubcathideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <Development />
              </div>
              <div id='development' onMouseEnter={this.devsubcatvisibleDisplay} onMouseLeave={this.devsubcathideDisplay} style={{display:'none', paddingLeft:'2rem', marginLeft: '14.5rem'}}>
                <Development />
              </div>
            </div>
          </div>
        </div>
        <div id='development' onMouseEnter={this.devsubcatvisibleDisplay} onMouseLeave={this.devsubcathideDisplay} style={{display:'none', paddingLeft:'2rem'}}>
            <Development />
          </div>
      </div>
    );
  }
}

export default categorycard;