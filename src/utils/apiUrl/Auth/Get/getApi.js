import {
    api,
    authApi,
    getAccessTokenFromCookie
  } from "../../TokenUtils";
  


  export const getProfile = async () => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
      const response = await authApi.get('/getProfile', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      
      console.log(response)
      // Check the response status and return data or error accordingly
      if (response.status === 200) {
        return { data: response.data };
      } else {
        return { error: `Failed to get user profile (Status: ${response.status})` };
      }
    } catch (error) {
      // Handle network errors and other exceptions
      console.error('Error in getting profile:', error);
      return { error: 'Failed to get user profile (Network error or exception)' };
    }
  };
  