import React from 'react';
import {Link} from 'react-router-dom'
import './css/navbar.css'
import UdemyLogo from './images/logo-udemy.svg'
import Globe from './images/globeBlack.svg'
import Cart from './images/cart.svg'
import Heart from './images/heart.svg'
import Bell from './images/bell.svg'
import axios from 'axios';
import './css/card.css'
import Bussiness from './bussinesscard'
import Teachonudemy from './teachonudemycard';
import Categorycard from './categorycard'
import MyLearning from './learningcard'
import Wishlist from './wishlistcard'
import CartCard from './cartcard';
import CategoryNav from './categorynav'
import ProfileMenu from './profilemenucard'

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
  ubvisibleDisplay = () => {
    var visible = document.getElementById('udemybussiness')
    console.log(visible)
    visible.style.display = 'block'
  }

  ubhideDisplay = () => {
    var visible = document.getElementById('udemybussiness')
    console.log(visible)
    visible.style.display = 'none'
  }

  tuvisibleDisplay = () => {
    var visible = document.getElementById('teachonudemy')
    console.log(visible)
    visible.style.display = 'block'
  }

  tuhideDisplay = () => {
    var visible = document.getElementById('teachonudemy')
    console.log(visible)
    visible.style.display = 'none'
  }

  catvisibleDisplay = () => {
    var visible = document.getElementById('categorycard')
    console.log(visible)
    visible.style.display = 'block'
  }

  cathideDisplay = () => {
    var visible = document.getElementById('categorycard')
    console.log(visible)
    visible.style.display = 'none'
  }

  mlvisibleDisplay = () => {
    var visible = document.getElementById('mylearning')
    console.log(visible)
    visible.style.display = 'block'
  }

  mlhideDisplay = () => {
    var visible = document.getElementById('mylearning')
    console.log(visible)
    visible.style.display = 'none'
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

  cartvisibleDisplay = () => {
    var visible = document.getElementById('cart')
    console.log(visible)
    visible.style.display = 'block'
  }

  carthideDisplay = () => {
    var visible = document.getElementById('cart')
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
    const isLoggedOut = this.state.isLoggedIn
    if(!isLoggedIn){
      return (
          <div>
          <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index" style={{ paddingTop: '15px', paddingBottom: '15px', boxShadow: '1px -5px 20px #8f8f8f'}}>
            <div className="container-fluid">
              <img src={UdemyLogo} style={{width: '80px'}}/>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link pe-2" onMouseEnter={this.catvisibleDisplay} onMouseLeave={this.cathideDisplay} style={{fontSize:'11px', color:'black'}}>Categories</a>
                  <form className="d-flex pe-2" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
                  </form>
                  <a className="nav-link pe-2" onMouseEnter={this.ubvisibleDisplay} onMouseLeave={this.ubhideDisplay} style={{fontSize:'11px', color:'black'}}>Udemy Business</a>
                  <a className="nav-link pe-2" onMouseEnter={this.tuvisibleDisplay} onMouseLeave={this.tuhideDisplay} style={{fontSize:'11px', color:'black'}}>Teach on Udemy</a>
                  <img src={Cart} className='pe-3 ps-3' onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay}/>
                  <Link to="/login" className="btn btn-light"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Login</Link>
                  <Link to="/sign_up" className="btn btn-dark"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Signup</Link>
                  <img src={Globe} className='btn btn-light' style={{borderRadius:'0', border: '1px solid black'}}/>
                </div>
              </div>
            </div>
          </nav>
          <div id='categorycard' onMouseEnter={this.catvisibleDisplay} onMouseLeave={this.cathideDisplay} style={{display:'none', paddingLeft:'2rem'}}>
            <Categorycard />
          </div>
          <div id='udemybussiness' onMouseEnter={this.ubvisibleDisplay} onMouseLeave={this.ubhideDisplay} style={{display:'none'}}>
            <Bussiness />
          </div>
          <div id='teachonudemy' onMouseEnter={this.tuvisibleDisplay} onMouseLeave={this.tuhideDisplay} style={{display:'none', paddingLeft:'2rem'}}>
            <Teachonudemy />
          </div>
          <div id='cart' onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay} style={{display:'none', marginLeft: '8rem'}}>
          <CartCard />
        </div>
        </div>
      );
    }
    else{
      return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index" style={{ paddingTop: '15px', paddingBottom: '15px', boxShadow: 'inset -5px -1px 0px 0px #d8d8d8'}}>
          <div className="container-fluid">
            <img src={UdemyLogo} style={{width: '100px'}}/>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link pe-3" onMouseEnter={this.catvisibleDisplay} onMouseLeave={this.cathideDisplay} style={{fontSize:'11px', color:'black'}}>Categories</a>
                <form className="d-flex pe-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
              </form>
              <a className="nav-link pe-3" onMouseEnter={this.ubvisibleDisplay} onMouseLeave={this.ubhideDisplay} style={{fontSize:'11px', color:'black'}}>Udemy Business</a>
              <a className="nav-link pe-3" style={{fontSize:'11px', color:'black'}}>Instructor</a>
              <a className="nav-link pe-3" onMouseEnter={this.mlvisibleDisplay} onMouseLeave={this.mlhideDisplay} style={{fontSize:'11px', color:'black'}}>My Learning</a>
              <img src={Heart} className="pe-3" onMouseEnter={this.wlvisibleDisplay} onMouseLeave={this.wlhideDisplay}/>
              <img src={Cart} className="pe-3" onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay}/>
              <img src={Bell} className="pe-3" />
              <button className="btn btn-dark" onMouseEnter={this.profilevisibleDisplay} onMouseLeave={this.profilehideDisplay}  style={{borderRadius:'25px', marginRight:'5px'}} onClick={this.handleLogout}>{user.first_name.charAt(0)}</button>
              </div>
            </div>
          </div>
        </nav>
        <div id='categorycard' onMouseEnter={this.catvisibleDisplay} onMouseLeave={this.cathideDisplay} style={{display:'none', paddingLeft:'2rem'}}>
          <Categorycard />
        </div>
        <div id='udemybussiness' onMouseEnter={this.ubvisibleDisplay} onMouseLeave={this.ubhideDisplay} style={{display:'none'}}>
          <Bussiness />
        </div>
        <div id='mylearning' onMouseEnter={this.mlvisibleDisplay} onMouseLeave={this.mlhideDisplay} style={{display:'none', marginLeft: '2rem'}}>
          <MyLearning />
        </div>
        <div id='wishlist' onMouseEnter={this.wlvisibleDisplay} onMouseLeave={this.wlhideDisplay} style={{display:'none', marginLeft: '8rem'}}>
          <Wishlist />
        </div>
        <div id='cart' onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay} style={{display:'none', marginLeft: '8rem'}}>
          <CartCard />
        </div>
        <div id='profile' onMouseEnter={this.profilevisibleDisplay} onMouseLeave={this.profilehideDisplay} style={{display:'none'}}>
          <ProfileMenu />
        </div>
        <CategoryNav />
      </div>
    );
  }
}
}

export default navbar;
