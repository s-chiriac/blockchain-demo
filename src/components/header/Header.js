import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey">
              <div className="card-content white-text">
                <span className="card-title">First Card</span>
                <p>This is the first card created with Materialize.</p>
              </div>
              <div className="card-action">
                <a href="#">Sweet</a>
                <a href="#">Whatever</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
