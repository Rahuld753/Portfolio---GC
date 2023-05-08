import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the Authentic flavour" />
      <h1 className='app__header-h1'>
        Happy Meals at Happier Prices
      </h1>
      <p className='app__header-p p__opensans'>Experience authentic Bangalorean dining in Pune! Gatti Chutney brings the fragrance and flavour of Namma Bengaluru to Aapla Pune with fresh ingredients</p>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcome' />
    </div>
  </div>
);

export default Header;
