import { Navigate } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, refreshToken } = useAuth();
  const shouldRedirect = !isLoggedIn && !refreshToken;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
