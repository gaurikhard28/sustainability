import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticleItem from './ArticleItem';
import Toast from './Toast';
import { incrementReadCount } from '../slices/newsSlice';

function Article() {
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);

  const handleShare = (articleLink) => {
    navigator.clipboard.writeText(articleLink);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); 
    console.log('hi');// Hide toast after 3 seconds
  };

  const handleRead = (articleId) => {
    dispatch(incrementReadCount(articleId));
  };

  return (
    <div>
      
      <div className="articles-list">
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            title={article.title}
            time={article.time}
            reads={article.reads}
            onShare={() => handleShare(`https://example.com/article/${article.id}`)}
            onRead={() => handleRead(article.id)}
          />
          
        ))}
      </div>
      <Toast message="hi"/>
      {showToast && <Toast message="Article link copied" isVisible={showToast}/>}
    </div>
  );
}

export default Article;
