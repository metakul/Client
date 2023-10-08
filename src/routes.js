import { useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from './layout/dashboard/index';
import HomePage from "./pages/HomePage/HomePage"

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
            path: '/nft', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <HomePage /> },
            ]
        },
        {
            path: '/transactions', 
            element:<DashboardLayout />,
        },
      
        {
            path: '/geography', 
            element:<DashboardLayout />,
        },
      
    ]);

    return routes;
}