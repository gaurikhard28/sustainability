import React from 'react'
import { Link } from 'react-router-dom';


const MoreScreen = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F8F8F8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <Link to="/events"><div>Events</div></Link>
        <Link to="/quiz"><div>Quiz</div></Link>
        <Link to="/footprint"><div>My Footprint</div></Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/profile"><div>Profile</div></Link>
        <Link to="/selfie"><div>Selfie</div></Link>
        <Link to="/news"><div>News</div></Link>
      </div>
    </div>
  )
}

export default MoreScreen