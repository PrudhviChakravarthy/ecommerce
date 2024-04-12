import React from 'react';
import dogheroimg from '../../static/images/doghero.png'
import './Hero.css'
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div className="Hero">
        <div className="hero-right">
            <h2>Cutest pets in collection </h2>
            <div>
                <p>Are you a pet lover?</p>
                <p>We have every adorable</p>
                <p>pet you can care for!</p>
            </div>
            <Link to={"/search"}><button className="getpetbtn">Get your pet now </button></Link>
        </div>
        <div className="hero-left">
            <img style={{maxHeight:'500px'}} src={dogheroimg} alt="" />
        </div>
      {/* <Typingtest carouselText={carouselText} /> */}
    </div>
  );
};

export default Hero;
