import React from 'react';
import { Link } from 'react-router-dom';


const Header2 = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Puzzle Store</h1>
          </Link>
          <p className="m-0">Store Info.</p>
        </div>
        <div>
          Cart
        </div>
      </div>
    </header>
  );
};

export default Header2;
