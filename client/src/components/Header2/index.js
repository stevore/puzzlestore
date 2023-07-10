import React from 'react';
import logoCart from './../../assets/images/shoppingcart.png';
//import bannerPuzzleStore from './../../assets/images/puzzlestorebanner.png'


const Header2 = () => {
  return (
    <header >
      <div >
        <div>
          <h1>The Puzzle Store</h1>
          <h2>because life is a puzzle</h2>
        </div>
        <div>
          <h3>Store Info<img src={logoCart} alt="Cart" /></h3>
        </div>
      </div>
    </header>
  );
};

export default Header2;
