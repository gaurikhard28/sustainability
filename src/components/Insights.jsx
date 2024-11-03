import React from 'react';
import { useSelector } from 'react-redux';

const Insights = () => {
  const insights = useSelector((state) => state.news.insights);

  return (
    <div className="insights">
      {insights.map((item, index) => (
        <div key={index} className="card">
          <img src={item.logo} alt={item.title} className="card-logo" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Insights;
