import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div id='contact' className='app__findus app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{ marginBottom: '1.5rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Vrindavan Society, GROUND FLOOR, BUILDING NORTH MAIN ROAD, 18, Lane No. 6, Koregaon Park, Pune, Maharashtra 411001</p>
        <p className='p__opensans'>Shop no 2,Hemkunj CHSL Munjeri, Mukund Nagar, Gultekadi, Pune, Maharashtra 411037</p>
        <p className='p__opensans'>Ground floor, Soho panchshil, Retail unit 2, Tower A, Upper Kharadi Main Rd, Kharadi, Pune, Maharashtra 411014</p>
        <p className='p__opensans'>Contact No. - 8070080794</p>
        <p className='p__cormorant' style={{ margin: "2rem 0 1rem" }}>Opening Hours</p>
        <p className='p__opensans'>All Days: 07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
