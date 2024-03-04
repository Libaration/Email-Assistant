import { useState, useEffect } from 'react';

export const useSalesforce = () => {
  const clientID = '3MVG9Kip4IKAZQEUxxFSNgLrJStG08x1.UvCR4JQeXhrkjQppml5vE2KesESIqF7pVOwmuCXRsEcUHSJ8vf.c';
  const redirect = 'https://login.salesforce.com/services/oauth2/success';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const url = `https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirect}`;
 
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return { url, accessToken, isLoggedIn };
}

