import {
  api,
  authApi,
  getAccessTokenFromCookie,
} from "./TokenUtils";

//export getApi
export * from './User/Get/getApi';    // Import and re-export User functions

//export postAPi
export * from './User/Post/postApi';    // Import and re-export User functions


// common api's:

export const registerUser = async (data) => {
  try {
    const response = await authApi.post("/user/registerUser", {
      email:data.email,
      password:data.password,
      phoneNumber:data.phoneNumber,
      user_country:data.user_country,
      // otp:data.otp
    }, {});
    return response;
  } catch (error) {
    throw error;
  }
};