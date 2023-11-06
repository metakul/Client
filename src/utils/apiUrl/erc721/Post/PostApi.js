
import {
    api,
    ERC721API,
    getAccessTokenFromCookie,
} from "../../TokenUtils";

export const ClaimNFT = async (password) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        console.log(accessToken)
        // Send a request to the server to logout the user
        const response = await ERC721API.post("/mint",{
            password
        },{
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          });

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        throw error
    }
};

export const TransferNFT = async (receiverAddress, password, tokenID) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        // Send a request to the server to logout the user
        const response = await ERC721API.post("/transferNft",{
            receiverAddress, password, tokenID
        },{
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          });

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.log(error)
        throw error
    }
};
export const stakeNFT = async (tokenID, password) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        // Send a request to the server to logout the user
        const response = await ERC721API.post("/stakeNFT",{
            tokenID, password
        },{
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          });

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.log(error)
        throw error
    }
};
export const unstakeNFT = async (tokenID, password) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        // Send a request to the server to logout the user
        const response = await ERC721API.post("/unstakeNFT",{
            tokenID, password
        },{
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          });

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.log(error)
        throw error
    }
};
export const claimRewards = async ( password) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        // Send a request to the server to logout the user
        const response = await ERC721API.post("/claimRewards",{password
        },{
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          });

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.log(error)
        throw error
    }
};

