import React from 'react';
import logo from '../../../assets/logo.png';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          <span className="ms-2">To Do List</span>
        </a>
      </div>
    </nav>
  );
}

export default Header;
