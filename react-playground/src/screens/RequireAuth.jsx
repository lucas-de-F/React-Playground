import {
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import useAuth from '../hookAuth';

export function RequireAuth({ roles }) {
    const { auth } = useAuth();
    const location = useLocation();
  
    return (
      auth?.auth?.roles?.find((role) => roles?.includes(role))
      ? <Outlet />
      : auth?.auth?.user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace/>
        : <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
  }