import { useRoutes } from 'react-router-dom';

//checkAuth
import CheckAuth from './utils/auth/CheckAuth';
// layouts
import DashboardLayout from './layout/metakulDashboard';
//pages
import AuthPage from "./pages/AuthPage/Login"
import HomePage from "./pages/HomePage"
import MintPage from "./pages/NftPage/mintNft"
import ComingSoon from "./pages/Common/ComingSoon.jsx"
import KycPage from "./pages/KycPage/kycPage"
import { Career } from './pages/CssPages/Career';
import Laundry from "./pages/Laundry"
import Profile from "./pages/Profile"
import ProductsView from './pages/ProductShopping';
import Register from './pages/AuthPage/Register';
import Wallet from "./pages/Wallet"
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
            path: '/login', 
            element:<AuthPage />,
           
        },
        {
            path: '/register', 
            element:<Register />,
           
        },
        {
            path: '/NFT', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <MintPage /> },
            ]
        },
        {
            path: '/marketplace', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <ComingSoon /> },
            ]
        },
        {
            path: '/kyc', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <KycPage /> },
            ]
        },

        {
            path: '/Career', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <Career /> },
            ]
        },
        {
            path: '/Activity', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <ComingSoon /> },
            ]
        },
        {
            path: '/Laundry', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <Laundry /> },
            ]
        },
        {
            path: '/metakulNFT', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <ProductsView /> },
            ]
        },
        {
            path: '/Profile', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <Profile /> },
            ]
        },
        {
            path: '/Wallet', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <Wallet /> },
            ]
        },
    ]);

    return routes;
}