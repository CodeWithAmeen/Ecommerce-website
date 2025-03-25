import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './CSS/Signup.css';

export const Signup = () => {
  const [user, setUser] = useState({ username: '', email: '', phone: '', password: '' });
  const { saveTokenInLocalStr } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!user.username || !user.email || !user.phone || !user.password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        saveTokenInLocalStr(responseData.token);
        console.log('User signed up successfully:', responseData);
        navigate('/'); // Redirect to home page
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message || 'Unknown error');
        alert(errorData.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  const handleSocialSignup = (platform) => {
    console.log(`Signing up with ${platform}`);
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone no:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>

      <div className="signup-link">
        <p>Already have an account? <a href="/my-account">Login</a></p>
      </div>

      <div className="social-login">
        <p>Or signup with:</p>
        <div className="social-icons">
          <button onClick={() => handleSocialSignup('Google')}>
            <FontAwesomeIcon icon={faGoogle} /> Google
          </button>
          <button onClick={() => handleSocialSignup('X')}>
            <FontAwesomeIcon icon={faXTwitter} /> X
          </button>
          <button onClick={() => handleSocialSignup('Facebook')}>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
