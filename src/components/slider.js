import React from 'react';
import { Slide } from 'react-slideshow-image';
 

 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties} className="alignslide">
        <div className="each-slide">
          <img className="simg" src={require('../images/slide2.jpg')}/>
          
        </div>
        <div className="each-slide">
           <img className="simg" src={require('../images/slide6.jpg')}/>
        </div>
        <div className="each-slide">
          <img className="simg" src={require('../images/slide1.jpg')}/>
        </div>
        <div className="each-slide">
          <img className="simg" src={require('../images/slide4.jpg')}/>
        </div>
        <div className="each-slide">
          <img className="simg" src={require('../images/slide5.jpg')}/>
        </div>
        <div className="each-slide">
          <img className="simg" src={require('../images/slide3.jpg')}/>
        </div>
      </Slide>
    )
}

export default Slideshow;