import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation

const Header = () => {
  return (
    <header>
      <h1>Testar saker // Burak</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>  {/* Link to Home page */}
          </li>
          <li>
            <Link to="/about">About</Link>  {/* Link to About page */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
