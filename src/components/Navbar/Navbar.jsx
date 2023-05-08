import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css';

import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu, setToggle] = useState(false)
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='app_logo' />
        <h3 className='logo__heading p__cormorant'>Gatti Chutney</h3>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#outlets">Outlets</a></li>
        <li className='p__opensans'><a href="#aboutus">About</a></li>
        <li className='p__opensans'><a href="#gallery">Gallery</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>

      <div className='app__navbar-menu'>
        <GiHamburgerMenu color='#0C0C0C' className='overlay__open' fontSize={27} onClick={() => setToggle(true)} />
        {toggleMenu &&
          <div className='app__navbar-menu_container flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggle(false)} />
            <ul className='app__navbar-menu-links'>
              <li className='p__opensans' onClick={() => setToggle(false)}><a href="#home">Home</a></li>
              <li className='p__opensans' onClick={() => setToggle(false)}><a href="#outlets">Outlets</a></li>
              <li className='p__opensans' onClick={() => setToggle(false)}><a href="#aboutus">About</a></li>
              <li className='p__opensans' onClick={() => setToggle(false)}><a href="#gallery">Gallery</a></li>
              <li className='p__opensans' onClick={() => setToggle(false)}><a href="#contact">Contact</a></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;
