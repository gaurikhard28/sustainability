import React from 'react'

const Dashboard = () => {
    return (
        <div className="dashboard">
            
          <div className="widget">
            <h3>Your Carbon Footprint</h3>
            <p>24.22 Tons CO₂e</p>
            <button>Calculate your footprint</button>
          </div>
          <div className="widget">
            <h3>Join City Events</h3>
            <p>Find events near you</p>
          </div>
          <div className="widget">
            <h3>Eco Shop</h3>
            <p>Explore eco-friendly products</p>
          </div>
          <div className="widget">
            <h3>Trending</h3>
            <p>See what's popular</p>
          </div>
        </div>
      );
    
}

export default Dashboard