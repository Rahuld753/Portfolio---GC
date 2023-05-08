import React from 'react';
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { AboutUs, FindUs, Gallery, Header, Outlets } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Outlets />
    <AboutUs />
    <Gallery />
    <FindUs />

    <div class="icon-bar">
      <a target='_blank' rel="noreferrer" href="https://www.instagram.com/gattichutneyindia/" class="instagram"><BsInstagram /></a>
      <a target='_blank' rel="noreferrer" href="https://www.facebook.com/people/Gatti-Chutney-India/100076360763712/" class="facebook"><BsFacebook /></a>
      <a href="mailto:contact@gattichutney.com" class="email"><AiOutlineMail /></a>
    </div>
  </div >
);

export default App;
