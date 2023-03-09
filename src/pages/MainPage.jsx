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

// import { Outlet } from 'react-router-dom';
// import { useAuth } from './../hooks/useAuth';
// import { LoginPage } from 'pages/LoginPage';
// import { HomePage } from 'pages/HomePage/HomePage';

// export const MainPage = () => {
//   const { isLoggedIn } = useAuth();
//   return (
//     <div>
//       {isLoggedIn ? <HomePage /> : <LoginPage />}
//       <Outlet />
//     </div>
//   );
// };
