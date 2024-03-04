import { useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export const useSalesforce = () => {
  const clientID = process.env.REACT_APP_SALESFORCE_CLIENT_ID;
  const redirectUri = 'https://test.salesforce.com/services/oauth2/success';
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const logout = useUserStore((state) => state.logout);
  useEffect(() => {
    // Listener callback
    const handleAccessToken = (event, token) => {
      console.log('Access token received:', token);
      setAccessToken(token); 
    };

    // Attach the event listener for 'accessToken'
    window.electronAPI.onAccessToken(handleAccessToken);

    // Cleanup function to remove the event listener
    return () => {
      window.electronAPI.removeAccessTokenListener(handleAccessToken);
    };
  }, []);

  const handleLogout = () => {
    logout(); 
  };

  const url = `https://test.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectUri}`;
  const accessToken = useUserStore((state) => state.accessToken);
  const isLoggedIn = !!accessToken;
  return { url, accessToken, isLoggedIn, handleLogout };
};
