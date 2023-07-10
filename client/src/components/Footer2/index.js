import React from 'react';
import logoFacebook from './../../assets/images/facebook.png';
import logoPinterest from './../../assets/images/pinterest.png';
import logoInstagram from './../../assets/images/instagram.png';
import logoThreads from './../../assets/images/threads.png';

const Footer2 = () => {

return (
    <footer>
      <div >
          <h3>
            About Us
            Contact Us
            Shipping Info
          </h3>
          <span id="social">
            <img src={logoFacebook} alt="Facebook" />
            <img src={logoInstagram} alt="Instagram" />
            <img src={logoPinterest} alt="Pinterest" />
            <img src={logoThreads} alt="Threads" />
          </span>
      </div>
    </footer> 
)}
export default Footer2;