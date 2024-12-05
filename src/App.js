import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import './App.css';

const blogPosts = [
  { id: 1, title: 'Understanding React', category: 'React', content: 'React is a JavaScript library for building user interfaces...' },
  { id: 2, title: 'Getting Started with Node.js', category: 'Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine...' },
  { id: 3, title: 'A Guide to CSS Grid', category: 'CSS', content: 'CSS Grid Layout is a two-dimensional layout system for the web...' },
  { id: 4, title: 'Basics of Python', category: 'Python', content: 'Python is a high-level, object-oriented programming language...'},
  
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = blogPosts.filter((post) =>
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="App">
      <Navbar />
      <SearchBox onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <SearchResults posts={filteredPosts} />
    </div>
  );
}

export default App;
