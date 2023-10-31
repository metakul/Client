
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

