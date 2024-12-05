import React from 'react';
import './SearchBox.css';

function SearchBox({ onSearch, onCategoryChange }) {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="CSS">CSS</option>
        <option value="Python">Python</option>
        
      </select>
    </div>
  );
}

export default SearchBox;
