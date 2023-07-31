import React from 'react'
import './styles.css'
import greekSalad from '../../img/greek salad.jpg'
import bruschetta from '../../img/bruchetta.svg'
import lemonDessert from '../../img/lemon dessert.jpg'
import { RiEBike2Line } from 'react-icons/ri';

const specials = [
    {
      id: 1,
      image: greekSalad,
      name: 'Greek Salad',
      price: '$ 12.99',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      id: 2,
      image: bruschetta,
      name: 'Bruschetta',
      price: '$ 5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.',
    },
    {
      id: 3,
      image: lemonDessert,
      name: 'Lemon Dessert',
      price: '$ 5.00',
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];


const SpecialCard = () => {
    const specialties = specials.map(
        ({ id, image, name, price, description }) => {
          return (
            <div key={id} className='card-container'>
              <div className='specials-image-container'>
                <img src={image} alt={name} className='specials-image' />
              </div>
              <div className='specials-details'>
                <div className='main-text-name'>
                  <p>{name}</p>
                  <p className='specials-price'>{price}</p>
                </div>
                <p className='specials-description'>{description}</p>
                <div className='specials-delivery'>
                  <p className='specials-name'>Order a delivery</p>
                  <RiEBike2Line />
                </div>
              </div>
            </div>
          );
        }
      );
      return <div className='card-list'>{specialties}</div>;
};

export default SpecialCard