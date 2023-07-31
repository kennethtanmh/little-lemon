import React from 'react'
import heroImg from '../../img/heroimg.jpg'
import './styles.css'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section className='hero reservation'>
        <div className='main-container'>
          <h1 className='main-title'>Little Lemon</h1>
          <h3 className='main-subtitle'>Chicago</h3>
          <h4 className='main-text'>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </h4>
          <Link to='/bookings' className='reserve-button'>
            Reserve a Table
          </Link>
        </div>
        <div className='image-container'>
          <img
            src={heroImg}
            alt='restaurant food'
            className='display-image'
          />
        </div>
      </section>
    );
  };
  
  export default Hero;