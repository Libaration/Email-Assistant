import { useState, useEffect } from 'react';

export const useSalesforce = () => {
  const clientID = process.env.REACT_APP_SALESFORCE_CLIENT_ID;
  const redirectUri = 'https://login.salesforce.com/services/oauth2/success';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // Listener callback
    const handleAccessToken = (event, token) => {
      console.log('Access token received:', token);
      setAccessToken(token);
      setIsLoggedIn(true);
    };

    // Attach the event listener for 'accessToken'
    window.electronAPI.onAccessToken(handleAccessToken);

    // Cleanup function to remove the event listener
    return () => {
      window.electronAPI.removeAccessTokenListener(handleAccessToken);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccessToken('');
    // Implement additional logout logic as needed
  };

  const url = `https://test.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectUri}`;

  return { url, accessToken, isLoggedIn, handleLogout };
};
