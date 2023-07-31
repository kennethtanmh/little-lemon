import React from 'react'
import './styles.css'
import harry from '../../img/harry.jpeg'
import bruno from '../../img/bruno.jpeg'
import lizz from '../../img/lizz.jpeg'
import victor from '../../img/victor.jpeg'

const reviews = [
  {
    id: 1,
    name: 'Victor Lindelöf',
    img: victor,
    comment:
      '"The fresh ingredients made it stand out."',
  },
  {
    id: 2,
    name: 'Bruno Fernandes',
    img: bruno,
    comment:
      '"The flavors were on point with a unique touch."',
  },
  {
    id: 3,
    name: 'Lisandro Martínez',
    img: lizz,
    comment:
      '"Lemon Dessert at Little Lemon is a game-changer!"',
  },
  {
    id: 4,
    name: 'Harry Maguire',
    img: harry,
    comment:
      '"I wish I could perform as impressively as the food!"',
  },
];


const Testimonials = () => {
  const playerReviews = reviews.map(({ id, name, img , comment }) => {
    return (
        <div key={id} className='testimonials-map-container'>
        <p className='testimonials-name'>{name}</p>
        <img src={img} alt='player reviews' className='testimonials-player-img'/>
        <p className='testimonials-description'>{comment}</p>
      </div>
    );
  });

  return (
    <section className='testimonials reviews'>
      <div className='testimonials-header'>
        <h1 className='testimonials-title'>Elevating Culinary Experiences: Hear from Our Cherished Guests!</h1>
      </div>
      <div className='testimonials-card'>{playerReviews}</div>
      <p className='about-text-2'>
          Score A Winning Discount! Wear Your Man United Jersey For 10% Off At Little Lemon
      </p>
      <p className='about-text-2'>
        "Where Football & Flavors Unite!"
      </p>
    </section>
  )
}

export default Testimonials


