import React from 'react';
import axios from 'axios';
import Bell from './images/bell.svg'
import Ruppee from './images/currency.svg'
import Slider from "react-slick";
// import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  display: 'block' }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </div>
    );

}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: 'block' }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
      </div>
    );
}

class coursecard extends React.Component {
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
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };
    if (courseData.length!=0){
      return (
        <Slider {...settings}>
            {courseData.map((data)=>{
                  return (
                      <div style={{width: '20%',border: 'none'}}>
                        <img src={Bell} className="card-img-top" alt="..." style={{ height: '9rem', width: '100%'}}/>
                        <div className="card-body">
                          <h5 className="card-title" style={{fontSize: '15px', fontWeight: '700'}}>{data.name}</h5>
                          <p className="card-text" style={{fontSize: '12px', color:'grey'}}>{data.description}</p>
                          <p className="card-text" style={{fontSize: '15px', fontWeight: '800'}}><img src={Ruppee}/>{data.price}</p>
                        </div>
                      </div>
                  );
            })}
        </Slider>
      )
    }
  }
}

export default coursecard;
