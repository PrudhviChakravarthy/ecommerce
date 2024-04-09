import React from 'react';
import Typingtest from './typing_text';
import dogheroimg from '../../static/images/doghero.png'
import './Hero.css'

const carouselText = [
  { text: "Apple", color: "red" },
  { text: "Orange", color: "orange" },
  { text: "Lemon", color: "yellow" }
];

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
            <button className="getpetbtn">Get your pet now </button>
        </div>
        <div className="hero-left">
            <img style={{maxHeight:'500px'}} src={dogheroimg} alt="" />
        </div>
      {/* <Typingtest carouselText={carouselText} /> */}
    </div>
  );
};

export default Hero;
