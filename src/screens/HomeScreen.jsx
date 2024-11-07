import React from 'react';
import { FaCamera, FaEdit, FaVideo, FaPodcast } from 'react-icons/fa';
import Announcement from '../components/Announcement';
import Dashboard from '../components/Dashboard';
import Stories from '../components/Stories';
import '../assets/styles/HomeScreen.css'; // Import CSS for custom styles
import { Carousel } from 'react-bootstrap';

function HomeScreen() {

  const announcements = [
    { title: 'Announcement', message: 'Be part of the Solution, not the Pollution.' },
    { title: 'Reminder', message: 'Reduce, Reuse, Recycle!' },
    { title: 'Community', message: 'Join our weekly cleanup drives!' },
    { title: 'Event', message: 'Earth Day celebration this April!' },
    { title: 'Tip', message: 'Switch to reusable bags and bottles.' }
  ];

  
  return (
    <div className="container">
      {/* Navigation with Blue Icons */}
      <nav className="row justify-content-between mb-3">
        <div className="col-auto icon-container">
          <FaCamera className="nav-icon" /> {/* Story Icon */}
        </div>
        <div className="col-auto icon-container">
          <FaEdit className="nav-icon" /> {/* Blog Icon */}
        </div>
        <div className="col-auto icon-container">
          <FaVideo className="nav-icon" /> {/* Video Icon */}
        </div>
        <div className="col-auto icon-container">
          <FaPodcast className="nav-icon" /> {/* Podcast Icon */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="row">
      <Carousel indicators={false}>
        {announcements.map((ann, index) => (
          <Carousel.Item key={index}>
            <Announcement title={ann.title} message={ann.message} />
          </Carousel.Item>
        ))}
      </Carousel>
        <div className="col-md-6">
          <Dashboard />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <Stories />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;