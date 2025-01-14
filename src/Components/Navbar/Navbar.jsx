import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'sticky' : ''}`}>
      <RouterLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </RouterLink>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/AboutUS">About Us</RouterLink></li>
        <li><RouterLink to="/Gallery">Gallery</RouterLink></li>
        <li><RouterLink to="/OurBusiness">Our Business</RouterLink></li>
        <li className="dropdown">
          <RouterLink to="/PotatoInsights">Potato Insights</RouterLink>
          <ul className="dropdown-menu">
            <li><RouterLink to="/TypesOfPotatoes">Types of Potatoes</RouterLink></li>
            <li><RouterLink to="/nutritional-facts">Nutritional Facts</RouterLink></li>
            <li><RouterLink to="/potato-history">Potato History</RouterLink></li>
            <li><RouterLink to="/potato-recipes">Potato Recipes</RouterLink></li>
            <li><RouterLink to="/faq">FAQs</RouterLink></li>
          </ul>
        </li>
        <li><RouterLink to="/VendorFeedback">Vendor & Customers</RouterLink></li>
        <li><ScrollLink to="contact" smooth={true} offset={-50} duration={500}>Contact Us</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
