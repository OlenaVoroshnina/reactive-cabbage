import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { IncomePage } from 'pages/IncomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ExpensesPage } from 'pages/ExpensesPage';
import { ReportPage } from 'pages/ReportPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route index element={<Navigate to="/home" />} />

          <Route path="/home" element={<HomePage />}>
            <Route index element={<Navigate to="/home/expenses" />} />
            <Route path="income" element={<IncomePage />} />
            <Route path="expenses" element={<ExpensesPage />} />
          </Route>

          {/* )} */}
          {/* {isMobile && ( */}
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
          {/* )} */}
          <Route path="/reports" element={<ReportPage />} />
          {/* </Route> */}
          <Route path="*" element={<NotFoundPage />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
};
