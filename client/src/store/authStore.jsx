import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  // Initialize the state with token from localStorage, if present
  const [auth, setAuth] = useState(() => {
    const storedToken = localStorage.getItem('authToken');
    return {
      token: storedToken || null,
      isAuthenticated: !!storedToken,
      user: null, // User data will be fetched later if token is valid
    };
  });

  // Save the token and optionally user data in localStorage and state
  const saveTokenInLocalStr = (token, userData = null) => {
    localStorage.setItem('authToken', token);
    setAuth({
      token,
      isAuthenticated: true,
      user: userData, // Save user data if provided
    });
  };

  // Log out the user by clearing the token and resetting state
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuth({
      token: null,
      isAuthenticated: false,
      user: null,
    });
    navigate('/login'); // Redirect to login page after logout
  };

  // Fetch user data if token is available
  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.token) return; // If no token, skip fetching user data

      try {
        const response = await fetch('http://localhost:5001/api/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`, // Use token in Authorization header
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setAuth((prevState) => ({
            ...prevState,
            user: userData,
          }));
        } else {
          // If token is invalid or expired, log out the user
          logout();
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        logout();
      }
    };

    fetchUserData();

    // Cleanup effect (optional, for handling component unmount or token changes)
    return () => {
      // Nothing to clean up in this case, but you can add cleanup logic if needed
    };
  }, [auth.token, logout]); // Only re-run if the token changes

  return {
    auth,
    saveTokenInLocalStr,
    logout,
  };
};
