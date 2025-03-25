import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./CSS/Footer.css"; // Assuming you have a CSS file for styling

export const Footer = () => {
  return (
    <>
      <div className="newsletter-section">
        <h3>Signup for Newsletters</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Signup</button>
        </form>
      </div>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>A brief description about your company or organization.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#home-section">Home</a></li>
              <li><a href="#about-section">About</a></li>
              <li><a href="#trainer-section">Men's Wear</a></li>
              <li><a href="#supplement-section">women's Wear</a></li>
              <li><a href="#location-section">kid's Wear</a></li>
              <li><a href="#contact-section">Contact </a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className="facebook-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer" className="twitter-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className="instagram-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CoreFit. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};
