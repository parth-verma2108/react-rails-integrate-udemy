import React, { Component } from 'react';
import axios from 'axios';
import ProfileMenu from './profilemenucard';
import Bell from './images/bell.svg'
import Wishlist from './wishlistcard'

class instructornav extends Component {
  state = {
    isLoggedIn: false,
    isLoggedOut: true,
    user: {}
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/api/v1/logged_in',
    {withCredentials: true})
    .then(response => {
      console.log(response.data)
      if (response.data.logged_in) {
        this.handleLogin(response.data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    console.log('Dandlie', data.user)
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  wlvisibleDisplay = () => {
    var visible = document.getElementById('wishlist')
    console.log(visible)
    visible.style.display = 'block'
  }

  wlhideDisplay = () => {
    var visible = document.getElementById('wishlist')
    console.log(visible)
    visible.style.display = 'none'
  }

  profilevisibleDisplay = () => {
    var visible = document.getElementById('profile')
    console.log(visible)
    visible.style.display = 'block'
  }

  profilehideDisplay = () => {
    var visible = document.getElementById('profile')
    console.log(visible)
    visible.style.display = 'none'
  }
  render() {
    const user = this.state.user
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div style={{position: 'absolute',
        width: '100%'}}>
        <div className='d-flex' style={{ justifyContent: 'right'}}>
          <div className='pt-3 pb-3 ps-2 pe-2'>
            Student
          </div>
          <div className='pt-3 pb-3 ps-2 pe-2'onMouseEnter={this.wlvisibleDisplay} onMouseLeave={this.wlhideDisplay}>
            <img src={Bell}/>
          </div>
          <div className='pt-3 pb-3 ps-2 pe-2'onMouseEnter={this.profilevisibleDisplay} onMouseLeave={this.profilehideDisplay}>
            <button className="btn btn-dark" style={{borderRadius:'25px', marginRight:'5px'}}>P</button>
          </div>
        </div>
        <div id='wishlist' onMouseEnter={this.wlvisibleDisplay} onMouseLeave={this.wlhideDisplay} style={{display:'none', marginLeft: '15rem'}}>
          <Wishlist />
        </div>
        <div id='profile' onMouseEnter={this.profilevisibleDisplay} onMouseLeave={this.profilehideDisplay} style={{display:'none', marginLeft: '7.5rem'}}>
          <ProfileMenu />
        </div>
      </div>
      
    );
  }
}

export default instructornav;