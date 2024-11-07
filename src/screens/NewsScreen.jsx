import React from 'react'
import Insights from '../components/Insights';
import Article from '../components/Article';
import { useSelector } from 'react-redux';
import TabNavigation from '../components/TabNavigation';

const NewsScreen = () => {
  
    const activeTab = useSelector((state) => state.news.activeTab);

  return (
    <div className="app">
      <header >
        <h2>News</h2>
        <p>Get the latest on sustainability, company initiatives, and global news from trusted sources like Science Daily and SDG.</p>
      </header>

      <TabNavigation />

      <div className="content">
        {activeTab === 'insights' ? <Insights /> : <Article />}
      </div>

      
    </div>
  );
}
  


export default NewsScreen