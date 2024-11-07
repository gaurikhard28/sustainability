import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faQuestionCircle, faLeaf, faUser, faCamera, faNewspaper } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use
import '../assets/styles/MoreScreen.css'; // Make sure to import your CSS file

const MoreScreen = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F8F8F8' }}>
      <div className="link-container">
        <Link to="/events" className="link-box">
          <div>Events</div>
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        </Link>
        <Link to="/quiz" className="link-box">
          <div>Quiz</div>
          <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
        </Link>
        <Link to="/footprint" className="link-box">
          <div>My Footprint</div>
          <FontAwesomeIcon icon={faLeaf} className="icon" />
        </Link>
      </div>
      <div className="link-container">
        <Link to="/profile" className="link-box">
          <div>Profile</div>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
        <Link to="/selfie" className="link-box">
          <div>Selfie</div>
          <FontAwesomeIcon icon={faCamera} className="icon" />
        </Link>
        <Link to="/news" className="link-box">
          <div >News</div>
          <FontAwesomeIcon icon={faNewspaper} className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default MoreScreen;
