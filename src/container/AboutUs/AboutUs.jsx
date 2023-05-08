import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './AboutUs.css';

const Chef = () => (
  <div id="aboutus" className='app__aboutus section__padding app__wrapper'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.about} alt="about" style={{ maxHeight: 500 }} />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Our History" />
      <h1 className='headtext__cormorant'>About Us</h1>
      <div className='app__about-content'>
        <p className='p__opensans'>Gatti chutney is an authentic South Indian cuisine QSR which promises to provide the authentic taste and flavor of Bangalore.  We came into existence from the year 2021 December 26th and from then onwards we are in the market successfully making a mark and serving our beloved guests the real taste of Bangalore, Karnataka. Gatti chutney is the result of the never ending search of our founder MR. Rohit Jain who was always in the search of the DOSA and real flavors of Bangalore food, outside Bangalore who eventually ended making the dream of him having it in Pune the taste of Bangalore GATTI CHUTNEY. Our first Dosa house by the name of Gatti chutney  is at Koregaon park Pune running successfully second at Mukund Nagar and are in process of opening many more.</p>
      </div>
    </div>
  </div>
);

export default Chef;
