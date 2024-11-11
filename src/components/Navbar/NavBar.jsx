// NAVBAR JSX

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './NavBar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-title">
          <span>Neuron</span>
        </div>
        <ul className="nav-list">
          <li>Home</li>
          <li>Planos</li>
          <li>Sobre Nós</li>
          <li>Intercâmbio</li>
        </ul>
        <div className="nav-login">
          <button>Login</button>
        </div>
        <div className="hamburger-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-list">
          <li>Home</li>
          <li>Planos</li>
          <li>Sobre Nós</li>
          <li>Intercâmbio</li>
        </ul>
        <div className="sidebar-login">
          <button>Login</button>
        </div>
      </div>

      {/* Overlay to close sidebar */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;