import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <ul className="header-list">
            <li><Link to={'/main'}>Main</Link></li>
            <li><Link to={'/cuisines'}>Cuisines</Link></li>
            <div>
              <li><button onClick={this.logoutUser}>Logout</button></li>
            </div>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="header-list">
            <li className="signup-button"><Link to={'/signup'}>Signup</Link></li>
            <li className="login-button"><Link to={'/login'}>Login</Link></li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <header className="navbar-header">
        <nav className="header-navbar">

          <div className="navbar-left">
            <div className="logo-image">
              <img src={require("./favicon.png")} alt=""/>
            </div>
            <h1 className="navbar-logo"><Link to="/">PiCook</Link></h1>    
          </div>

          { this.getLinks() }
        </nav>
      </header>
    );
  }
}

export default NavBar;