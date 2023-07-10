import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer2 = () => {

return (
    <footer className="w-100 mt-auto bg-secondary p-4">
        <div className="container text-center mb-5"> 
        </div>
    <div id="social">
        <span>
          <a href="mailto:#"><img class="socialicon" src={"../assets/images/email.png"} alt="email"/></a>
          <a target="_self" href="#" rel="noreferrer"><img class="socialicon"  src={"../assets/images/linkedin.png"} alt="Linkedin"/></a>
          <a target="_self" href="#" rel="noreferrer"><img class="socialicon"  src={"../assets/images/github.png"} alt="github"/></a>
        </span>
  </div>
    </footer> 
)}
export default Footer2;