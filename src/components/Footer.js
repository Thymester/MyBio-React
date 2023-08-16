// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Your other footer content */}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}

export default Footer;
