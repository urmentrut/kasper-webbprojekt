import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>OSRS Stats Viewer</h1>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/live-tracker">Live Tracker</Link>
        <Link to="/character-stats">Character Stats</Link>
        <Link to="/questlogs">Quest Logs</Link>
        <Link to="/bosstracker">Boss Tracker</Link>
        <Link to="/achievements">Achievements</Link>
      </nav>
    </header>
  );
};

export default Header;
