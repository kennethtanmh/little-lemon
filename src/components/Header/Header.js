import { useRef, useEffect } from 'react';
import logo from '../../img/Logo.svg';
import './styles.css';
import { Link as LinkS } from 'react-scroll';

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
    id: 5,
    link: 'contact us',
  },
];

const Header = () => {
  const navLinks = links.map(({ link, id }) => (
    <li key={id}>
      <LinkS to={link} smooth duration={550} className='links'>
        {link}
      </LinkS>
    </li>
  ));

  const navRef = useRef(null);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const navElement = navRef.current;

      if (!navElement) return;

      if (previousScrollPosition > currentScrollPosition) {
        navElement.style.transform = 'translateY(0)';
      } else {
        navElement.style.transform = 'translateY(-100%)';
      }

      previousScrollPosition = currentScrollPosition;
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

    const handleLogoClick = () => {
      window.location.reload()
      window.scrollTo(0, 0);
    }

  return (
    <header ref={navRef}>
      <nav className='navbar'>
        <ul className='navbar-links'>
          <li className='navbar-logo' onClick={handleLogoClick}>
            <img src={logo} alt='Little Lemon Logo' />
          </li>
          <li className='navbar-links links'>{navLinks} </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


