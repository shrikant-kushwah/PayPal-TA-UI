import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">PayPal</div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">Home</li>
          <li className="header-nav-item">Finances</li>
          <li className="header-nav-item">Send and Request</li>
          <li className="header-nav-item">Deals</li>
          <li className="header-nav-item">Wallet</li>
          <li className="header-nav-item">Activity</li>
          <li className="header-nav-item">Help</li>
          <li className="header-nav-item">Log Out</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
