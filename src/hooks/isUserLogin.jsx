import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

// Define a custom React Hook
const useIsLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("accessToken"); // Read the accessToken from cookies
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return loggedIn;
};

export default useIsLoggedIn;
