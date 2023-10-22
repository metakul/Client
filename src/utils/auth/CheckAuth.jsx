import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

export default function CheckAuth({ requiredRole, children }) {

  const token = Cookies.get("accessToken"); // Read the accessToken from cookies

  if (token) {
    const decodedToken = jwt_decode(token);

    // console.log("decodedToken",decodedToken)

    if (decodedToken.user_type === requiredRole) {
      return children;
    } else {
      return <Navigate to="/401" />;
    }
  } else {
    console.log("Token not received");
    return <Navigate to="/" />;
  }

  return children;



}
