import { Outlet } from 'react-router-dom';
import { useAuth } from './../../hooks/useAuth';
import { Header } from 'components/Header/Header';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? <AuthNav /> : <Header />}
      <Outlet />
    </div>
  );
};
