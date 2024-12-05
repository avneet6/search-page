import React from 'react';
import './SearchResults.css';

function SearchResults({ posts }) {
  return (
    <div className="search-results">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <h3>{post.category}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
