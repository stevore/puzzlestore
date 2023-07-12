import React from 'react';
import logoCart from './../../assets/images/shoppingcart.png';
import hamburger from './../../assets/images/hamburger.png';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <header className="header container-fluid">
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2">
        <Link className="" to={`/`}>
        <img src={hamburger} alt="Menu" />
        </Link>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-8">
          <h1>The Puzzle Store</h1>
          <p>because life is a puzzle</p>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2">
        <Link className="" to={`/cart`}>
                      <img src={logoCart} alt="Cart" /> 
        </Link>
  
        </div>
      </div>
    </header>
  );
};

export default Header2;
