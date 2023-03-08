import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from './../../hooks/useAuth';
import { Header } from 'components/Header/Header';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(isLoggedIn ? '/home' : '/login');
  }, [isLoggedIn, navigate]);

  return (
    <div>
      {isLoggedIn ? <AuthNav /> : <Header />}
      <Outlet />
    </div>
  );
};
