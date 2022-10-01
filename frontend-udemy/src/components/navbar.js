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
          <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index" style={{ padding:'0', boxShadow: '1px -5px 20px #8f8f8f'}}>
            <div className="d-flex" style={{justifyContent: 'center', width:'100%'}}>
              <div className='pt-3 pb-3'>
                <Link to="/">
                  <img src={UdemyLogo} style={{width: '80px'}}/>
                </Link>
              </div>
              <div className="navbar-nav">
                <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.catvisibleDisplay} onMouseLeave={this.cathideDisplay}>
                  <a className="nav-link" style={{fontSize:'12px', color:'black'}}>Categories</a>
                </div>
                <div className='pt-3 pb-3 ps-2 pe-2'>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
                  </form>
                </div>
                <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.ubvisibleDisplay} onMouseLeave={this.ubhideDisplay}>
                  <a className="nav-link"  style={{fontSize:'12px', color:'black'}}>Udemy Business</a>
                </div>
                <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.tuvisibleDisplay} onMouseLeave={this.tuhideDisplay} >
                  <a className="nav-link" style={{fontSize:'12px', color:'black'}}>Teach on Udemy</a>
                </div>
                <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay}>
                  <img src={Cart}/>
                </div>
                <div className='pt-3 pb-3 ps-2 pe-2 d-flex'>
                  <div>
                    <Link to="/login" className="btn btn-light"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Login</Link>
                  </div>
                  <div>
                    <Link to="/sign_up" className="btn btn-dark"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Signup</Link>
                  </div>
                  <div>
                    <img src={Globe} className='btn btn-light' style={{borderRadius:'0', border: '1px solid black', padding: '10px'}}/>
                  </div>
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
          <div id='cart' onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay} style={{display:'none', marginLeft: '9.5rem'}}>
          <CartCard />
        </div>
        </div>
      );
    }
    else{
      return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index" style={{padding:'0', boxShadow: 'inset -5px -1px 0px 0px #d8d8d8'}}>
          <div className="d-flex" style={{justifyContent: 'center', width:'100%'}}>
            <div className='pt-3 pb-3'>
              <img src={UdemyLogo} style={{width: '80px'}}/>
            </div>
            <div className="navbar-nav">
              <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.catvisibleDisplay} onMouseLeave={this.cathideDisplay}>
                <a className="nav-link" style={{fontSize:'12px', color:'black'}}>Categories</a>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2'>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
                </form>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.ubvisibleDisplay} onMouseLeave={this.ubhideDisplay}>
                <a className="nav-link"  style={{fontSize:'12px', color:'black'}}>Udemy Business</a>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2'>
                <a className="nav-link" style={{fontSize:'12px', color:'black'}}>Instructor</a>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.mlvisibleDisplay} onMouseLeave={this.mlhideDisplay}>
                <a className="nav-link"  style={{fontSize:'12px', color:'black'}}>My Learning</a>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2'onMouseEnter={this.wlvisibleDisplay} onMouseLeave={this.wlhideDisplay}>
                <img src={Heart}/>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2' onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay}>
                <img src={Cart}/>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2'onMouseEnter={this.wlvisibleDisplay} onMouseLeave={this.wlhideDisplay}>
                <img src={Bell}/>
              </div>
              <div className='pt-3 pb-3 ps-2 pe-2'onMouseEnter={this.profilevisibleDisplay} onMouseLeave={this.profilehideDisplay}>
                <button className="btn btn-dark" style={{borderRadius:'25px', marginRight:'5px'}} onClick={this.handleLogout}>{user.first_name.charAt(0)}</button>
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
        <div id='mylearning' onMouseEnter={this.mlvisibleDisplay} onMouseLeave={this.mlhideDisplay} style={{display:'none', marginLeft: '7rem'}}>
          <MyLearning />
        </div>
        <div id='wishlist' onMouseEnter={this.wlvisibleDisplay} onMouseLeave={this.wlhideDisplay} style={{display:'none', marginLeft: '15rem'}}>
          <Wishlist />
        </div>
        <div id='cart' onMouseEnter={this.cartvisibleDisplay} onMouseLeave={this.carthideDisplay} style={{display:'none', marginLeft: '17rem'}}>
          <CartCard />
        </div>
        <div id='profile' onMouseEnter={this.profilevisibleDisplay} onMouseLeave={this.profilehideDisplay} style={{display:'none', marginLeft: '7.5rem'}}>
          <ProfileMenu />
        </div>
        <CategoryNav />
      </div>
    );
  }
}
}

export default navbar;
