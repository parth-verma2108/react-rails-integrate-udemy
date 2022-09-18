import React from 'react';
import {Link} from 'react-router-dom'
import './css/navbar.css'
import UdemyLogo from './images/logo-udemy.svg'
// import Home from './home'
import Globe from './images/globeBlack.svg'
import Cart from './images/cart.svg'
import Heart from './images/heart.svg'
import Bell from './images/bell.svg'
import axios from 'axios';
import './css/card.css'
class navbar extends React.Component {
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
      isLoggedOut: false,
      user: data.user
    })
  }
  handleLogout = () => {
    axios.post('http://localhost:3001/api/v1/logout',
    {withCredentials: true})
    .then(response => {
      if (response.data.logged_out) {
        this.setState({
          isLoggedIn: false,
          isLoggedOut: true,
          user: {}
          })
      }
    })
    .catch(error => console.log('api errors:', error))
    
  }
  visibleDisplay = () => {
    var visible = document.getElementById('card')
    console.log(visible)
    visible.style.display = 'block'
  }

  hideDisplay = () => {
    var visible = document.getElementById('card')
    console.log(visible)
    visible.style.display = 'none'
  }
  render() {
    const user = this.state.user
    const isLoggedIn = this.state.isLoggedIn
    const isLoggedOut = this.state.isLoggedIn
    if(!isLoggedIn){
      return (
          <div>
          <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index" style={{ paddingTop: '15px', paddingBottom: '15px'}}>
            <div className="container-fluid">
              <img src={UdemyLogo} style={{width: '80px'}}/>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link pe-2" style={{fontSize:'11px', color:'black'}}>Categories</a>
                  <form className="d-flex pe-2" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
                  </form>
                  <a className="nav-link pe-2" onMouseEnter={this.visibleDisplay} onMouseLeave={this.hideDisplay} style={{fontSize:'11px', color:'black'}}>Udemy Business</a>
                  <a className="nav-link pe-2" style={{fontSize:'11px', color:'black'}}>Teach on Udemy</a>
                  
                  <img src={Cart} className='pe-3 ps-3'/>
                  {/* <button className="btn btn-light" style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}} onClick={() => {window.location.href="/users/sign_in"}}>Login</button> */}
                  <Link to="/login" className="btn btn-light"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Login</Link>
                  <Link to="/sign_up" className="btn btn-dark"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Signup</Link>
                  <img src={Globe} className='btn btn-light' style={{borderRadius:'0', border: '1px solid black'}}/>
                </div>
              </div>
            </div>
          </nav>
          <div className="mycard" id ='card' onMouseEnter={this.visibleDisplay}>
            <div className="card" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight: '700',fontSize: '17px',
        textAlign: 'center'}}>Get your team access to over 17,000 top Udemy courses, anytime, anywhere.</h5>
                <button className="btn btn-dark" style={{borderRadius:'0', width:'16rem',     fontWeight: '700'}}type='submit'>Try Udemy Business</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else{
      return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index" style={{ paddingTop: '15px', paddingBottom: '15px'}}>
          <div className="container-fluid">
            <img src={UdemyLogo} style={{width: '100px'}}/>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link pe-2" style={{fontSize:'13px', color:'black'}}>Categories</a>
                <form className="d-flex pe-2" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
              </form>
              <a className="nav-link pe-2" style={{fontSize:'13px', color:'black'}}>Udemy Business</a>
              <a className="nav-link pe-2" style={{fontSize:'13px', color:'black'}}>Instructor</a>
              <a className="nav-link pe-2" style={{fontSize:'13px', color:'black'}}>My Learning</a>
              <img src={Heart} className="pe-2"/>
              <img src={Bell} className="pe-2"/>
              <img src={Cart} className="pe-2"/>
              <button className="btn btn-light"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}} onClick={this.handleLogout}>{user.first_name}</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
    }
  }
}

export default navbar;
