import { Outlet, Navigate } from 'react-router-dom';
import config from '@/config';

function PrivateRoute({ isAuthenticated }) {
    return isAuthenticated ? <Outlet /> : <Navigate to={config.routes.landing} />;
}

export default PrivateRoute;
