import React from 'react';
import '../assets/styles/Dashboard.css'; // Make sure to import your CSS file

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="widget">
                <h3 className="row-title">Your Carbon Footprint</h3>
                <p className="row-desc">24.22 Tons CO₂e</p>
                <button className='home-button'><p className="row-desc">Calculate your footprint</p></button>
            </div>
            <div className="widget">
                <h3 className="row-title">Join City Events</h3>
                <p className="row-desc">Find events near you</p>
            </div>
            <div className="widget">
                <h3 className="row-title">Eco Shop</h3>
                <p className="row-desc">Explore eco-friendly products</p>
            </div>
            <div className="widget">
                <h3 className="row-title">Trending</h3>
                <p className="row-desc">See what's popular</p>
            </div>
        </div>
    );
}

export default Dashboard;
