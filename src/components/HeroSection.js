import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     
      <h1>Prints By You is a globally recognized eco friendly printing service that allows for efficient and comprehensible printing</h1>
      
      <p>Design and sell customized merchandise for your business while also being eco conscious.</p>
      <div className='hero-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
         
        >
          LOG IN 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
