import React from 'react'
import './styles.css'
import { Link as LinkS } from 'react-scroll';
import {FaFacebook, FaInstagram, FaTiktok, FaTwitter} from 'react-icons/fa';
import footerimg from '../../img/footer.png';

const links = [
  {
    id: 1,
    link: 'reservation',
  },
  {
    id: 2,
    link: 'menu',
  },
  {
    id: 3,
    link: 'reviews',
  },
  {
    id: 4,
    link: 'about us',
  },
  {
    id:5 ,
    link: 'contact us',
  }
];

const contacts = [
  {
    id: 1,
    link: 'tel:+7732642380',
    title: '(773) 264-2380',
  },
  {
    id: 2,
    link: 'mailto:reservations@littlelemon.com',
    title: 'reservations@littlelemon.com',
  },
];

const socials = [
  {
    id: 1,
    child: <FaFacebook size={30} />,
    link: 'https://facebook.com',
  },
  {
    id: 2,
    child: <FaInstagram size={30} />,
    link: 'https://instagram.com/',
  },
  {
    id: 3,
    child: <FaTiktok size={30} />,
    link: 'https://tiktok.com/',
  },
  {
    id: 4,
    child: <FaTwitter size={30} />,
    link: 'https://twitter.com/',
  },
];

const Footer = () => {
  const navLinks = links.map(({ link, id }) => {
    return (
      <li key={id}>
        <LinkS to={link} smooth duration={550} className='footer-links'>
          {link}
        </LinkS>
      </li>
    );
  });

  const contactLinks = contacts.map(({ link, id, title }) => {
    return (
      <li key={id}>
        <a href={link} className='contact-links'>
          {title}
        </a>
      </li>
    );
  });

  const socialLinks = socials.map(({ id, child, link }) => {
    return (
      <li key={id}>
        <a
          href={link}
          target={'_blank'}
          rel='noreferrer'
          className='social-links'
        >
          {child}
        </a>
      </li>
    );
  });

  const handleLogoClick = () => {
    window.location.reload()
    window.scrollTo(0, 0);
  }
  return (
    <footer name='contact'>
      <nav className='footer-container'>
        <div className='footer-photo-container' onClick={handleLogoClick}>
          <img src={footerimg} className='footer-photo' alt='logo' />
        </div>
        <ul className='grid-item-nav'>
          <p className='footer-title'>Little Lemon</p>
          {navLinks}
        </ul>

        <ul className='grid-item-contact contact us'>
          <p className='footer-title'>Contact</p>
          <address>
            Address:
            <br />
            Little Lemon
            <br />
            12112 S Front Ave
            <br />
            Chicago, Illinois(IL), 60628
            <br />
            <div className='contacts'>{contactLinks}</div>
          </address>
        </ul>

        <ul className='grid-item-socials'>
          <p className='footer-title'>Follow Us</p>
          <p className='footer-title-2'>{socialLinks}</p>
        </ul>
      </nav>

      <p className='credits'>
        <a
          className='linkedin-link'
          target={'_blank'}
          rel='noreferrer'
          href='https://www.linkedin.com/'
        >
          Kenneth © 2023
        </a>

      </p>
    </footer>
  );
};

export default Footer;
