import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// import { PrivateRoute } from './PrivateRoute';
// import RestrictedRoute from "./RestrictedRoute"
import { Loader } from './Loader/Loader';
import HomePage from 'pages/HomePage';
import { IncomePage } from 'pages/IncomePage';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ExpensesPage } from 'pages/ExpensesPage';
import { ReportPage } from 'pages/ReportPage';
import { MainPage } from 'pages/MainPage';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </div>
      <Transactions />
    </>
  );
};
