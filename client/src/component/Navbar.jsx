import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart, faUser, faTimes, faSignOutAlt, faTshirt, faShoePrints, faChild, faTag, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './CSS/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleMenuToggleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchToggleClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-phone">
          <span>Phone.no : +123 456 7890</span>
        </div>
        <div className="nav-icons">
          <button className="search-toggle" onClick={handleSearchToggleClick} aria-label="Search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <NavLink to="/cart" aria-label="Shopping Cart" onClick={handleNavLinkClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
          {isLoggedIn ? (
            <div className="user-info">
              <span>Welcome, {userName}</span>
              <button className="logout-button" onClick={handleLogout} aria-label="Logout">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </div>
          ) : (
            <NavLink to="/my-account" aria-label="My Account" onClick={handleNavLinkClick}>
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          )}
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <NavLink to="/" onClick={handleNavLinkClick}>
            <img src="images/Logo.png" alt="Logo" />
          </NavLink>
        </div>
        <button className="menu-toggle" onClick={handleMenuToggleClick} aria-label="Toggle menu">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="menu-icon" />
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" onClick={handleNavLinkClick} activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" onClick={handleNavLinkClick} activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/mens-wear" onClick={handleNavLinkClick} activeClassName="active">
              Men's Wear <FontAwesomeIcon icon={faChevronDown} />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/mens-casual" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faTshirt} /> Casual
              </NavLink>
              <NavLink to="/mens-formal" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faTshirt} /> Formal
              </NavLink>
              <NavLink to="/mens-sportswear" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faShoePrints} /> Sportswear
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/womens-wear" onClick={handleNavLinkClick} activeClassName="active">
              Women's Wear <FontAwesomeIcon icon={faChevronDown} />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/womens-casual" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faTshirt} /> Casual
              </NavLink>
              <NavLink to="/womens-formal" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faTshirt} /> Formal
              </NavLink>
              <NavLink to="/womens-activewear" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faShoePrints} /> Activewear
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/kids-wear" onClick={handleNavLinkClick} activeClassName="active">
              Kid's Wear <FontAwesomeIcon icon={faChevronDown} />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/kids-casual" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faChild} /> Casual
              </NavLink>
              <NavLink to="/kids-formal" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faChild} /> Formal
              </NavLink>
              <NavLink to="/kids-playwear" onClick={handleNavLinkClick} activeClassName="active">
                <FontAwesomeIcon icon={faChild} /> Playwear
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/sales-offers" onClick={handleNavLinkClick} activeClassName="active">
              <FontAwesomeIcon icon={faTag} /> Sales/Offers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" onClick={handleNavLinkClick} activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
      {searchOpen && (
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
