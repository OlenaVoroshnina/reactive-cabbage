import { Outlet } from 'react-router-dom';
import { useAuth } from './../../hooks/useAuth';
import { UserNav } from 'components/UserNav/UserNav';
import { Header } from 'components/Header/Header';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? <UserNav /> : <Header />}
      <Outlet />
    </div>
  );
};
