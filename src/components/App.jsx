import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import HomePage from 'pages/HomePage';
import { IncomePage } from 'pages/IncomePage';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ExpensesPage } from 'pages/ExpensesPage';
import { ReportPage } from 'pages/ReportPage';
import { MainPage } from 'pages/MainPage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshToken } from 'redux/auth/operation';
import { Navbar } from './Navbar/Navbar';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<MainPage />}>
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            ></Route>
            <Route
              path="income"
              element={
                <PrivateRoute redirectTo="/login" component={<IncomePage />} />
              }
            ></Route>
            <Route
              path="expenses"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ExpensesPage />}
                />
              }
            ></Route>
            <Route
              path="/reports"
              element={
                <PrivateRoute redirectTo="/login" component={<ReportPage />} />
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
      {/* <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/home" element={<HomePage />}>
              <Route index element={<Navigate to="/home/expenses" />} />
              <Route path="income" element={<IncomePage />} />
              <Route path="expenses" element={<ExpensesPage />} />
            </Route>
            <Route path="/reports" element={<ReportPage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      </Suspense> */}
    </div>
      

  );
};
