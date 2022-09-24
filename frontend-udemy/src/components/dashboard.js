import React from 'react';
import axios from 'axios';
import DashboardImage from './images/dashboard.jpeg'
import DashboardCard from './dashboardcard'
import ShowCourse from './coursecard'

class dashboard extends React.Component {
  state = {
    courses : []
  }
  componentDidMount() {
    console.log('Calling api')
    axios.get('http://localhost:3001/api/v1/courses')
    .then((response) => {
      console.log(response.data)
      this.setState({courses: response.data})});
  }
  render() {
    const courseData = this.state.courses;
    console.log(courseData)
    if (courseData.length!=0){
      for(var i=0;i<courseData.length;i++){
        return (
          <div>
            <div className="mb-5 ms-5 me-5">
              <img src={DashboardImage} style={{width: '100%', marginBottom: '4rem'}}/>
              <DashboardCard />
            </div>
            <ShowCourse name={courseData[i].name} description={courseData[i].description} price={courseData[i].price}/>
          </div>
        );
      }
    }
  }
}

export default dashboard;
