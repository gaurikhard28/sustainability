import React from 'react';
import { FaCheckCircle, FaBell } from 'react-icons/fa'; // Import icons
import '../assets/styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="profile-section">
        <img src="profile-pic-placeholder.png" alt="User Profile" className="profile-pic" />
        <span className="profile-name">John Smith</span>
        <FaCheckCircle className="verified-icon" />
      </div>
      <FaBell className="notification-icon" />
    </header>
  );
}

export default Header;
