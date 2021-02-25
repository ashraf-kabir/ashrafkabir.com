import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='hero__video' src='/videos/video-123.mp4' autoPlay loop muted />
      <h1 className='hero__h1'>HELLO FOLKS</h1>
      <p className='hero__about'>My name is Ashraf Kabir. <br/>I am a web developer based in Dhaka, Bangladesh</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          View CV
          <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
