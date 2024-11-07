import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTrophy, faUserFriends, faEllipsisH } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use
import '../assets/styles/NavBar.css'; // Make sure to import your CSS file

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active icon

  return (
    <nav className="bottom-nav">
      <Link to="/" onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? 'active' : ''}>
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <button onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? 'active' : ''}>
        <FontAwesomeIcon icon={faTrophy} />
      </button>
      <button onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? 'active' : ''}>
        <FontAwesomeIcon icon={faUserFriends} />
      </button>
      <Link to="/more" onClick={() => setActiveIndex(3)} className={activeIndex === 3 ? 'active' : ''}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </Link>
    </nav>
  );
}

export default NavBar;
