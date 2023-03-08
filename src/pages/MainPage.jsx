import { Outlet } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth';
// import { UserNav } from 'components/UserNav/UserNav';
// import { Header } from 'components/Header/Header';
import { LoginPage } from 'pages/LoginPage';
import { HomePage } from './HomePage';

export const MainPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? <HomePage /> : <LoginPage />}
      <Outlet />
    </div>
  );
};
