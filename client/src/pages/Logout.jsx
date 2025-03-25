import React, { useEffect } from 'react';
import { useAuth } from '../store/authStore';  // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth(); // Access the logout function from useAuth hook
  const navigate = useNavigate();

  useEffect(() => {
    // Call the logout function to clear the token and reset the auth state
    logout();
    // Optionally, you can show a message or redirect to login immediately
    navigate('/login');  // Ensure the user is redirected to the login page
  }, [logout, navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
