import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="blue darken-4">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">Blockchain Demo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active"><a href="#">Hash</a></li>
            <li><a href="#">Block</a></li>
            <li><a href="#">Blockchain</a></li>
            <li><a href="#">Distributed</a></li>
            <li><a href="#">Tokens</a></li>
            <li><a href="#">Coinbase</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
