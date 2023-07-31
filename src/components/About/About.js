import React from 'react'
import './styles.css'
import chef1 from '../../img/chef1.jpg'
import chef2 from '../../img/chef2.jpg'

const About = () => {
  return (
    <section name='about' className='about us'>
      <div className='about-container'>
        <h1 className='about-title'>Little Lemon / Chicago</h1>
        <p className='about-text'>
        Mario and Adrian are two talented chefs with a shared passion for Mediterranean cuisine inherited from their family's culinary traditions. <br />
          <br />Growing up in a close-knit Mediterranean community, they were exposed to a rich tapestry of flavors and cooking techniques from a young age.
        </p>
      </div>
      <div className='about-image-container'>
        <div className='about-container-one'>
          <img
            src={chef2}
            alt='chefs'
            className='about-image-one'
          />
        </div>
        <div className='about-container-two'>
          <img
            src={chef1}
            alt='chefs'
            className='about-image-two'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
