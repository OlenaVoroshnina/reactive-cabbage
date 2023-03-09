import { Outlet } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';

export const MainPage = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};
