import React from 'react';
import { FaShareAlt } from 'react-icons/fa';


function ArticleItem({ title, time, reads, onShare, onRead, imageSrc }) {
  return (
    <div className="article-item" onClick={onRead}>
      <div className="article-content">
        <div className="article-header">
          <p className="article-subheader">{time} | Source | Reads: {reads}</p>
          <h3 className="article-title">{title}</h3>
        </div>
        <button className="share-button" onClick={(e) => { e.stopPropagation(); onShare(); }}>
          <FaShareAlt />
        </button>
      </div>
      <img src={imageSrc} alt={title} className="article-image" />
    </div>
  );
}

export default ArticleItem;
