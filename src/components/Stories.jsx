import React from 'react';
import '../assets/styles/Stories.css'; // Make sure to import your CSS file

const Stories = () => {
  return (
    <section className="stories">
      <h6>Stories</h6>
      <div className="story-thumbnails">
        <img src="story1.jpg" alt="Story 1" />
        <img src="story2.jpg" alt="Story 2" />
        <img src="story3.jpg" alt="Story 3" />
      </div>
    </section>
  );
}

export default Stories;
