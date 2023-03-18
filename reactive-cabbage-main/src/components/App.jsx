import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Income from 'components/Income/Income';
import Expenses from 'components/Expenses/Expenses';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshToken } from 'redux/auth/operation';
import { Navbar } from './Navbar/Navbar';
// import AnimatCursor from 'components/AnimatedCursor/AnimatedCursor';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ReportPage = lazy(() => import('pages/ReportPage/ReportPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {/* <AnimatCursor /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              path="/expenses"
              element={
                <PrivateRoute redirectTo="/login" component={<Expenses />} />
              }
            />
            <Route
              path="/income"
              element={
                <PrivateRoute redirectTo="/login" component={<Income />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/expenses"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/expenses"
                  component={<RegisterPage />}
                />
              }
            />
          </Route>
          <Route
            path="/reports"
            element={
              <PrivateRoute redirectTo="/login" component={<ReportPage />} />
            }
          />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
