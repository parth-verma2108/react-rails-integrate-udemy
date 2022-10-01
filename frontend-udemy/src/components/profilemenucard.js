import React, { Component } from 'react';
import { Link } from  'react-router-dom';


class profilemenucard extends Component {
  render() {
    return (
      <div className="profilecard" id ='card'>
        <div className="card" style={{width: "14rem", borderRadius: '0', height: '43rem'}}>
          <div className="card-body">
            <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
              <ul style={{paddingLeft: "0px"}}>
                <li className="pb-2" style={{borderBottom: "1px solid #dfdfdf"}}>
                  <button className="btn btn-dark" onMouseEnter={this.profilevisibleDisplay} onMouseLeave={this.profilehideDisplay}  style={{borderRadius:'25px', marginRight:'5px'}} onClick={this.handleLogout}>P</button>
                  Parth
                </li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span>My Learning</span></li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span>My Cart</span></li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span>Wishlist</span></li>
                <li className="pb-2 pt-3" style={{borderBottom: "1px solid #dfdfdf", fontSize: '12px'}}><span>Instructor Board</span></li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span>Notification</span></li>
                <li className="pb-2 pt-3" style={{borderBottom: "1px solid #dfdfdf", fontSize:'12px'}}><span>Messages</span></li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span><Link to="/account_setting">
                Account Settings</Link></span></li>
                <li className="pb-2 pt-3" style={{borderBottom: "1px solid #dfdfdf", fontSize: '12px'}}><span>Payment Methods</span></li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span>Udemy Credits</span></li>
                <li className="pb-2 pt-3" style={{borderBottom: "1px solid #dfdfdf", fontSize: '12px'}}><span>Purchase Histroy</span></li>
                <li className="pb-2 pt-3" style={{borderBottom: "1px solid #dfdfdf", fontSize: '12px'}}><span>Languages</span></li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span>Public Profile</span></li>
                <li className="pb-2 pt-3" style={{borderBottom: "1px solid #dfdfdf", fontSize: '12px'}}><span>Edit Profile</span></li>
                <li className="pb-2 pt-3" style={{fontSize: "12px"}}><span>Help</span></li>
                <li style={{fontSize:'12px'}}><span>Logout</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profilemenucard;