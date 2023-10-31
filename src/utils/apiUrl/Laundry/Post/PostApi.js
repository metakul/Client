
import {
    api,
    laundryApi,
    getAccessTokenFromCookie,
} from "../../TokenUtils";



export const CreateOrder = async (data) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token

        // Send a request to the server to logout the user
        const response = await laundryApi.post("/laundry/createOrder", {
            data
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.error("Error Creating Order:", error);
    }
};

