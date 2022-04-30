import React from 'react';
import {
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hookAuth';

export default function RequireAuth({ roles }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.auth?.roles?.find((role) => roles?.includes(role))) return <Outlet />;
  if (auth?.auth?.user) return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  if (auth?.auth?.user) return <Navigate to="/unauthorized" state={{ from: location }} replace />;

  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  // return (
  //   auth?.auth?.roles?.find((role) => roles?.includes(role))
  //     ? <Outlet />
  //     : auth?.auth?.user
  //       ? <Navigate to="/unauthorized" state={{ from: location }} replace />
  //       : <Navigate to="/unauthorized" state={{ from: location }} replace />
  // );
}

RequireAuth.propTypes = {
  roles: PropTypes.oneOfType([PropTypes.string]).isRequired,
};
