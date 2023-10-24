import { useRoutes } from 'react-router-dom';

//checkAuth
import CheckAuth from './utils/auth/CheckAuth';
// layouts
import DashboardLayout from './layout/metakulDashboard';
//pages
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
import MintPage from "./pages/NftPage/mintNft"
import ComingSoon from "./pages/Common/ComingSoon.jsx"
import CustomMintPage from "./pages/CustomMintPage/CustomMint"

export default function Router() {

    const routes = useRoutes([
        {
            path: '/', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <HomePage /> },
            ]
        },
        {
            path: '/authentication', 
            element:<AuthPage />,
           
        },
        {
            path: '/NFT', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <MintPage /> },
            ]
        },
        {
            path: '/Transactions', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <CustomMintPage /> },
            ]
        },
        {
            path: '/Geography', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <ComingSoon /> },
            ]
        },
        {
            path: '/Vedic', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <ComingSoon /> },
            ]
        },
        {
            path: '/Activity', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <ComingSoon /> },
            ]
        },
    ]);

    return routes;
}