import React from 'react';
import Announcement from '../components/Announcement';
import Dashboard from '../components/Dashboard';
import Stories from '../components/Stories';

function HomeScreen() {
 return(
    <div>
        <nav>
        <button>Add Story</button>
        <button>Blog</button>
        <button>Video</button>
        <button>Podcast</button>
      </nav>

      <Announcement />
      <Dashboard />
      <Stories />

    </div>
 );
}



export default HomeScreen;