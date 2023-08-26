// Header.js
import React from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header>
      <h1>Thymester's Bio</h1>
      <ThemeToggle />
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
