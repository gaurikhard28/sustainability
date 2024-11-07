import React from 'react';
import '../assets/styles/Announcement.css';

const Announcement = ({ title, message }) => {
  return (
    <div className="announcement rounded-rectangle">
      <h6>{title}</h6>
      <section>
        <h2>{message}</h2>
        <p>Check out this space for opportunities where you can make a difference.</p>
      </section>
    </div>
  );
};

export default Announcement;
