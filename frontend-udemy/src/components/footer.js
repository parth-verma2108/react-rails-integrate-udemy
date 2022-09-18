import React from 'react';
import './css/footer.css'
import Nasdaqname from'./images/nasdaqname.svg'
import Volkswagen from './images/volkswagen-light.svg'
import Box from './images/box-light.svg'
import Netapp from './images/netapp-light.svg'
import EventBrite from './images/eventbrite-light.svg'
import Globe from './images/globe.svg'
const footer = () => {
    return (
        <div>
          <footer className="footer">
            <div className="d-flex">
              <p style={{color: 'white', padding: '30px', fontSize: '16px', margin: '0', width:'50%'}}>Top companies choose Udemy Business to build in-demand career skills.
              </p>
              <p style={{padding: '20px', margin: '0',  width:'50%', textAlign: 'right'}}>
                <img src={Nasdaqname} className="ps-3"/>
                <img src={Volkswagen} className="ps-3"/>
                <img src={Box} className="ps-3"/>
                <img src={Netapp} className="ps-3"/>
                <img src={EventBrite} className="ps-3"/>
              </p>
              
            </div>
            <hr style={{color: 'white', margin: '0'}}/>
            <div style={{padding:'30px'}}>
              <div className="row">
                <div className="footer-col">
                  <ul className="nav flex-column" style={{color:'white'}}>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Udemy Business</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Teach on Udemy</a></li>
                    <li className="nav-item"><a href="https://play.google.com/store/apps/details?id=com.udemy.android" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Get the app</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">About us</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0">Contact us</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <ul className="nav flex-column" style={{color:'white'}}>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Careers</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Blog</a></li>
                    <li className="nav-item"><a href="https://play.google.com/store/apps/details?id=com.udemy.android" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Help and Support</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Affiliate</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0">Investors</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                <ul className="nav flex-column" style={{color:'white'}}>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Terms</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Privacy Policy</a></li>
                    <li className="nav-item"><a href="https://play.google.com/store/apps/details?id=com.udemy.android" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Cookie settings</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0 ">Sitemap</a></li>
                    <li className="nav-item"><a href="#" style={{color:'white', fontSize:'12px'}} className="nav-link p-0">Accessibility Statements</a></li>
                  </ul>
                </div>
                <div className="footer-col" style={{width:'40%', textAlign:'end'}}>
                  <button type="button" class="btn btn-dark" style={{borderRadius:'0', border: '1px solid white', marginRight:'5px', color:'white', width:'30%'}}><img src={Globe}/><span style={{padding:'10px'}}>English</span></button>
                </div>
              </div>
            </div>
          </footer>
        </div>
    );
};

export default footer;