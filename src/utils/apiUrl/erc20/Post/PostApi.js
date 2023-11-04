
import {
    api,
    ERC721API,
    getAccessTokenFromCookie,
} from "../../TokenUtils";




export const sendErc20Token = async (receiverAddress, value, password) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token
        console.log(value)
        // Send a request to the server to logout the user
        const response = await ERC721API.post("/sendErc20Token",{
            receiverAddress:receiverAddress,
             value:value, password:password
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

