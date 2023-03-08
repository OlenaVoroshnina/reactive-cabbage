import { Outlet } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth';
import { LoginPage } from 'pages/LoginPage';
import { HomePage } from './HomePage/HomePage';

export const MainPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? <HomePage /> : <LoginPage />}
      <Outlet />
    </div>
  );
};
