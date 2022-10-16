import React, { Component } from 'react';
import './css/card.css'

class messagesetting extends Component {
  render() {
    return (
      <div className='mt-2'>
        <label>
          <div style={{width:'35rem', border:'1px solid black', paddingLeft:'10px', display:'flex'}}>
            <input type="checkbox" checked='false' style={{width:'44px'}}/>
            <div>
              <div>
                <p className='as-content m-3' style={{fontSize:'16px'}}>Turn off direct messaging</p>
              </div>
              <div>
                <p className=' m-3' style={{fontSize:'14px'}}>When you turn off direct messages, you will no longer be able to send or receive direct messages as an instructor.</p>
              </div>
            </div>
          </div>
        </label>
        <div style={{color:'#5624d0'}}>Learn more about the setting</div>
        <div>
          <button className='btn btn-dark as-content' style={{borderRadius:'0', height:'2.5rem', width:'5.5rem'}}>Save</button>
        </div>
      </div>
    );
  }
}

export default messagesetting;
