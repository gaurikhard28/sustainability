import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/">Home</Link>
      <button>Winners</button>
      <button>Referral</button>
      <Link to="/more">More</Link>

    </nav>
  );
}

export default NavBar