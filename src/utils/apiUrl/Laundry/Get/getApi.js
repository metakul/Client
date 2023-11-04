
import {
    api,
    laundryApi,
    getAccessTokenFromCookie,
} from "../../TokenUtils";



export const FetchMyOrders = async (data) => {
    try {
        const accessToken = await getAccessTokenFromCookie(); // Retrieve access token

        // Send a request to the server to logout the user
        const response = await laundryApi.post("/laundry/getOrdersByUserEmail", {
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response)

        return response
    } catch (error) {
        // Handle any errors that may occur during the logout process
        console.error("Error Fetching Order:", error);
        throw error
    }
};

