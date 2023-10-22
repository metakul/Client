
import {
    api,
    authApi,
    removeTokensFromCookies,
    setAccessTokenInCookie,
    setRefreshTokenInCookie,
    getAccessTokenFromCookie,
  } from "../../TokenUtils";
  

export const userLogin = async (data) => {
    try {
      const response = await authApi.post("/user/login", {
        email:data.email,
        password:data.password,
      }, {});
  
      console.log(response);
      const { access, refresh } = response.data.token;
  
      if (!access || !refresh) {
        throw new Error("Access Token Missing");
      }
  
      // Set access token and refresh token in secure HTTP-only cookies
      setAccessTokenInCookie(access);
      setRefreshTokenInCookie(refresh);
      console.log("logging in");
  
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with an error
        throw error
      } else {
        // Something else happened in making the request
        return "Server error: Unknown error";
      }
    }
  };

  export const userLogout = async () => {
      try {
        // const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
      const remove_tokens=removeTokensFromCookies();
      console.log(remove_tokens)

    //   // Send a request to the server to logout the user
    //   await authApi.post("/user/logout",{},{
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       });
  
      // If the request was successful, remove the tokens from cookies
    } catch (error) {
      // Handle any errors that may occur during the logout process
      console.error("Logout error:", error);
    }
  };

