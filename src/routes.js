import { useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from './layout/dashboard/index';

export default function Router() {

    const routes = useRoutes([
        {
            path: '/', 
            element:<DashboardLayout />,
        },
      
    ]);

    return routes;
}