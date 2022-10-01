import React, { Component } from 'react';
import './css/card.css'

class notificationsetting extends Component {
  render() {
    return (
      <div>
        <div style={{fontWeight:'800', fontSize:'20px', marginTop:'1rem'}}>I want to recieve:</div>
        <div>
          <label>
            <div style={{width:'35rem', border:'1px solid black', paddingLeft:'10px', display:'flex'}}>
              <input type="checkbox" checked='true' style={{width:'25px'}}/>
              <p className='as-content m-3' style={{fontSize:'16px'}}>Promotions, course recommendations, and helpful resources from Udemy..</p>
            </div>
          </label>
        </div>
        <div>
          <label>
            <div style={{width:'35rem', border:'1px solid black', paddingLeft:'10px', display:'flex'}}>
              <input type="checkbox" checked='true' style={{width:'44px'}}/>
              <div>
                <div>
                  <p className='as-content m-3' style={{fontSize:'16px'}}>Announcements from instructors whose course(s) I’m enrolled in.</p>
                </div>
                <div>
                  <p className=' m-3' style={{fontSize:'14px'}}>To adjust this preference by course, leave this box checked and go to the  course dashboard and click on "Options" to opt in or out of specific announcements.</p>
                </div>
              </div>  
              
            </div>
          </label>
        </div>
        <div className='mt-5'>
          <label>
            <div style={{width:'35rem', border:'1px solid black', paddingLeft:'10px', display:'flex'}}>
              <input type="checkbox" checked='true' style={{width:'44px'}}/>
              <div>
                <div>
                  <p className='as-content m-3' style={{fontSize:'16px'}}>Don't send me any promotional emails.</p>
                </div>
                <div>
                  <p className=' m-3' style={{fontSize:'14px'}}>If this box is checked, please note that you will continue to receive important transactional emails like purchase receipts.</p>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div>
          <button className='btn btn-dark as-content' style={{borderRadius:'0', height:'2.5rem', width:'5.5rem'}}>Save</button>
        </div>
      </div>
    );
  }
}

export default notificationsetting;