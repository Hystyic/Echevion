import React from 'react';
import { Link } from 'react-router-dom';
import catto from './cattt.png';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <button ><a href='http://localhost:3000/'><img src={catto} alt=''/></a></button>
      </div>
      <div className="navbar-search">
        <SearchBar />
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/Hiring">Hiring</Link></li>
          <li><Link to="/joblist">Job List</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
