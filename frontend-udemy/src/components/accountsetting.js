import React from 'react';
import './css/accountsetting.css';
import Footer from './footer'
import SideBar from './sidebar';
import AccountSecurity from './accountsecurity';
import NotificationSetting from './notificationsetting';
import MessageSetting from './messagesetting'
import APIClient from './apiclient'
import CloseAccount from './closeaccount'

class accountsetting extends React.Component {
  state = {
    active: 'AccountSecurity',
    underline: 'AccountSecurity'
  };
  setASDisplay = () => {
    this.setState({active: 'AccountSecurity'})
    
  }

  setNSDisplay = () => {
    this.setState({active: 'NotificationSetting'})
    
  }

  setMSDisplay = () => {
    this.setState({active: 'MessageSetting'})
    
  }

  setACDisplay = () => {
    this.setState({active: 'APIClient'})
    
  }

  setCADisplay = () => {
    this.setState({active: 'CloseAccount'})
    
  }
  render() {
    return (
      <div>
        <div className='d-flex'>
          <SideBar />
          <div style={{ position: 'absolute', marginLeft:'7rem', width: '100%'}}>
            <div className="title" style={{placeItems: 'flex-start'}}>
              <h2 style={{marginTop:'3rem'}}>Account</h2>
              <div className='d-flex'>
                <span className="acc-content" id='as' onClick={this.setASDisplay}>Account security</span>
                <span className="acc-content" id='ns' onClick={this.setNSDisplay}>Notification settings</span>
                <span className="acc-content" id='ms' onClick={this.setMSDisplay}>Message settings</span>
                <span className="acc-content" id='ac' onClick={this.setACDisplay}>API clients</span>
                <span className="acc-content" id='ca' onClick={this.setCADisplay}>Close account</span>
              </div>
              <hr style={{width: "90%", margin:'0', paddingLeft: '22rem'}}/>
            </div>
            <div>
              {(this.state.active === 'AccountSecurity' && <AccountSecurity
              />)
              }
              { this.state.active === 'NotificationSetting' && <NotificationSetting/>}
              { this.state.active === 'MessageSetting' && <MessageSetting/>}
              { this.state.active === 'APIClient' && <APIClient/>}
              { this.state.active === 'CloseAccount' && <CloseAccount/>}

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default accountsetting;