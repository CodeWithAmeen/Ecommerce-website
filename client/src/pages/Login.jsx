import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './CSS/Login.css';

export const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); // For showing backend errors
  const { saveTokenInLocalStr, auth, logout } = useAuth();
  const navigate = useNavigate();

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setError('Please fill in both the email and password fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();

      if (response.ok) {
        saveTokenInLocalStr(responseData.token); // Save the JWT token
        console.log('User logged in:', responseData);
        navigate('/'); // Redirect to the home page
      } else {
        // Display backend error
        setError(responseData.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  // Handle social login
  const handleSocialLogin = (platform) => {
    console.log(`Logging in with ${platform}`);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>} {/* Display errors */}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>

      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Signup</a></p>
      </div>

      <div className="social-login">
        <p>Or login with:</p>
        <div className="social-icons">
          <button onClick={() => handleSocialLogin('Google')}>
            <FontAwesomeIcon icon={faGoogle} /> Google
          </button>
          <button onClick={() => handleSocialLogin('X')}>
            <FontAwesomeIcon icon={faXTwitter} /> X
          </button>
          <button onClick={() => handleSocialLogin('Facebook')}>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </button>
        </div>
      </div>

      {auth.token && (
        <div className="logout-container">
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};
