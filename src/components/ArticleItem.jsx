import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

function ArticleItem({ title, time, reads, onShare, onRead }) {
  return (
    <div className="article-item" onClick={onRead}>
      <h3>{title}</h3>
      <p>{time}</p>
      <p>Reads: {reads}</p>
      <button className="share-button" onClick={(e) => { e.stopPropagation(); onShare(); }}>
        <FaShareAlt />
      </button>
    </div>
  );
}

export default ArticleItem;
