import { useEffect } from 'react';
import { useUserStore } from '../components/store/userStore'; 

export const useSalesforce = () => {
  const clientID = process.env.REACT_APP_SALESFORCE_CLIENT_ID;
  const redirectUri = 'https://login.salesforce.com/services/oauth2/success';
  const scope = 'refresh_token full offline_access web api';
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const logout = useUserStore((state) => state.logout);
  useEffect(() => {
    // Listener callback
    const handleAccessToken = (event, token) => {
      setAccessToken(token);
      localStorage.setItem('accessToken', token);
    };

    // Attach the event listener for 'accessToken'
    window.electronAPI && window.electronAPI.onAccessToken(handleAccessToken);

    // Cleanup function to remove the event listener
    return () => {
      window.electronAPI &&
        window.electronAPI.removeAccessTokenListener(handleAccessToken);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  const url = `https://ashlandauction.my.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectUri}&scope=full`;
  const accessToken = useUserStore((state) => state.accessToken);
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
  return { url, accessToken, isLoggedIn, handleLogout };
};
