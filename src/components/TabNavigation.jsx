import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../slices/newsSlice';



    const TabNavigation = () => {
        const activeTab = useSelector((state) => state.news.activeTab);
        const dispatch = useDispatch();
      
        return (
          <div className="tab-navigation">
            <button
              className={activeTab === 'insights' ? 'active' : ''}
              onClick={() => dispatch(setActiveTab('insights'))}
            >
              Insights
            </button>
            <button
              className={activeTab === 'articles' ? 'active' : ''}
              onClick={() => dispatch(setActiveTab('articles'))}
            >
              Articles
            </button>
          </div>
        );
      };
      
      export default TabNavigation

