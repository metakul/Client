
import {
    api,
    contractFetchAPI,
    getAccessTokenFromCookie,
} from "../../TokenUtils";

import jwt_decode from "jwt-decode";

export const GetAlllNfts = async (data) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        console.log(accessToken)

        // Send a request to the server to logout the user
        const response = await contractFetchAPI.get("/fetchAllNFTs");
        console.log(response)

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.error("Error Fetching Order:", error);
        throw error
    }
};
export const FetchMynfts = async () => {
    try {
        // const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        // console.log(accessToken)
        // let decodedToken
        // if (accessToken) {
        //    decodedToken = jwt_decode(accessToken);
        // }
        // console.log(decodedToken)

        //${decodedToken.smartWalletAddress}

        // Send a request to the server to logout the user
        const response = await contractFetchAPI.get(`/getNFTsForWallet`);
        console.log(response)

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.error("Error Fetching Order:", error);
        throw error
    }
};


