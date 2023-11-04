import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

const useFetchUserByUsername = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const accessToken = Cookies.get('accessToken') 
    // Check if accessToken is valid
    if (accessToken) {
      try {
        const decodedToken = jwt_decode(accessToken);
        console.log(decodedToken)
        // Check if the decoded token contains user data
        if (decodedToken && decodedToken.user_type) {
          // Set the user data to setData
          setData(decodedToken);
        }
      } catch (error) {
        console.error('Error decoding JWT token:', error);
      }
    }
  }, []); 
  console.log(data)
  return { data };
};

export default useFetchUserByUsername;
