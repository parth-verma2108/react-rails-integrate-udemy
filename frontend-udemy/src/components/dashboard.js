import React from 'react';
import DashboardImage from './images/dashboard.jpeg'
import DashboardCard from './dashboardcard'
import ShowCourse from './coursecard'

class dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="mb-5 ms-5 me-5">
          <img src={DashboardImage} style={{width: '100%', marginBottom: '4rem'}}/>
          <DashboardCard />
          <h1 style={{fontWeight: '700',fontSize: '35px',
            fontFamily:'Times'}}>What to learn next</h1>
        </div>
        <ShowCourse />
        
      </div>
    );
  }
}

export default dashboard;
