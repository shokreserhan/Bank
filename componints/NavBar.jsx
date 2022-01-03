import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
              <Link to="/" className="navbar-link">Home</Link>
              <Link to="/catalog" className="navbar-link">Catalog</Link>
            </div>
        );
    }
}

export default NavBar;
