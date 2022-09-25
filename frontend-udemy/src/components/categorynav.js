import React, { Component } from 'react';
import DevNav from './navsubcat/devnav'
import BusinessNav from './navsubcat/businessnav'
import FinanceNav from './navsubcat/financenav'
import ITNav from './navsubcat/itnav'
import OfficeNav from './navsubcat/officenav'
import PDNav from './navsubcat/pdnav'
import DesignNav from './navsubcat/designnav'
import MarketingNav from './navsubcat/marketingnav'
import HealthNav from './navsubcat/healthnav'
import MusicNav from './navsubcat/musicnav'
import './css/categorynav.css'

class categorynav extends Component {
  devvisibleDisplay = () => {
    var visible = document.getElementById('subdevelopment')
    console.log(visible)
    visible.style.display = 'block'
  }

  devhideDisplay = () => {
    var visible = document.getElementById('subdevelopment')
    console.log(visible)
    visible.style.display = 'none'
  }

  busvisibleDisplay = () => {
    var visible = document.getElementById('subbusiness')
    console.log(visible)
    visible.style.display = 'block'
  }

  bushideDisplay = () => {
    var visible = document.getElementById('subbusiness')
    console.log(visible)
    visible.style.display = 'none'
  }

  finvisibleDisplay = () => {
    var visible = document.getElementById('subfin')
    console.log(visible)
    visible.style.display = 'block'
  }

  finhideDisplay = () => {
    var visible = document.getElementById('subfin')
    console.log(visible)
    visible.style.display = 'none'
  }

  itvisibleDisplay = () => {
    var visible = document.getElementById('subit')
    console.log(visible)
    visible.style.display = 'block'
  }

  ithideDisplay = () => {
    var visible = document.getElementById('subit')
    console.log(visible)
    visible.style.display = 'none'
  }

  officevisibleDisplay = () => {
    var visible = document.getElementById('suboffice')
    console.log(visible)
    visible.style.display = 'block'
  }

  officehideDisplay = () => {
    var visible = document.getElementById('suboffice')
    console.log(visible)
    visible.style.display = 'none'
  }

  pdvisibleDisplay = () => {
    var visible = document.getElementById('subpd')
    console.log(visible)
    visible.style.display = 'block'
  }

  pdhideDisplay = () => {
    var visible = document.getElementById('subpd')
    console.log(visible)
    visible.style.display = 'none'
  }

  designvisibleDisplay = () => {
    var visible = document.getElementById('subdesign')
    console.log(visible)
    visible.style.display = 'block'
  }

  designhideDisplay = () => {
    var visible = document.getElementById('subdesign')
    console.log(visible)
    visible.style.display = 'none'
  }

  marketvisibleDisplay = () => {
    var visible = document.getElementById('submarket')
    console.log(visible)
    visible.style.display = 'block'
  }

  markethideDisplay = () => {
    var visible = document.getElementById('submarket')
    console.log(visible)
    visible.style.display = 'none'
  }

  healthvisibleDisplay = () => {
    var visible = document.getElementById('subhealth')
    console.log(visible)
    visible.style.display = 'block'
  }

  healthhideDisplay = () => {
    var visible = document.getElementById('subhealth')
    console.log(visible)
    visible.style.display = 'none'
  }

  musicvisibleDisplay = () => {
    var visible = document.getElementById('submusic')
    console.log(visible)
    visible.style.display = 'block'
  }

  musichideDisplay = () => {
    var visible = document.getElementById('submusic')
    console.log(visible)
    visible.style.display = 'none'
  }

  render() {
    return (
      <div>
      <nav class="navbar bg-light" style={{height: '2.5rem', boxShadow:' 2px -7px 18px 0px'}}>
        <div className='align-center'>
          <span onMouseEnter={this.devvisibleDisplay} onMouseLeave={this.devhideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Development</span>
          <span onMouseEnter={this.busvisibleDisplay} onMouseLeave={this.bushideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Business</span>
          <span onMouseEnter={this.finvisibleDisplay} onMouseLeave={this.finhideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Finance {'&'} Accounting</span>
          <span onMouseEnter={this.itvisibleDisplay} onMouseLeave={this.ithideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>It {'&'} Software</span>
          <span onMouseEnter={this.officevisibleDisplay} onMouseLeave={this.officehideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Office Productivity</span>
          <span onMouseEnter={this.pdvisibleDisplay} onMouseLeave={this.pdhideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Personal Development</span>
          <span onMouseEnter={this.designvisibleDisplay} onMouseLeave={this.designhideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Design</span>
          <span onMouseEnter={this.marketvisibleDisplay} onMouseLeave={this.markethideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Marketing</span>
          <span onMouseEnter={this.healthvisibleDisplay} onMouseLeave={this.healthhideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Health {'&'} Fitness</span>
          <span onMouseEnter={this.musicvisibleDisplay} onMouseLeave={this.musichideDisplay} style={{fontSize: '12px', paddingLeft: '2rem'}}>Music</span>
        </div>
      </nav>
      <div id='subdevelopment' onMouseEnter={this.devvisibleDisplay} onMouseLeave={this.devhideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <DevNav />
      </div>
      <div id='subbusiness' onMouseEnter={this.busvisibleDisplay} onMouseLeave={this.bushideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <BusinessNav />
      </div>
      <div id='subfin' onMouseEnter={this.finvisibleDisplay} onMouseLeave={this.finhideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <FinanceNav />
      </div>
      <div id='subit' onMouseEnter={this.itvisibleDisplay} onMouseLeave={this.ithideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <ITNav />
      </div>
      <div id='suboffice' onMouseEnter={this.officevisibleDisplay} onMouseLeave={this.officehideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <OfficeNav />
      </div>
      <div id='subpd' onMouseEnter={this.pdvisibleDisplay} onMouseLeave={this.pdhideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <PDNav />
      </div>
      <div id='subdesign' onMouseEnter={this.designvisibleDisplay} onMouseLeave={this.designhideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <DesignNav />
      </div>
      <div id='submarket' onMouseEnter={this.marketvisibleDisplay} onMouseLeave={this.markethideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <MarketingNav />
      </div>
      <div id='subhealth' onMouseEnter={this.healthvisibleDisplay} onMouseLeave={this.healthhideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <HealthNav />
      </div>
      <div id='submusic' onMouseEnter={this.musicvisibleDisplay} onMouseLeave={this.musichideDisplay} style={{display:'none', position: 'absolute', width:'100%'}}>
        <MusicNav />
      </div>
      </div>
    );
  }
}

export default categorynav;