import React from 'react';
import { Link } from 'react-router-dom';

export const NavTransactions = () => {
  return (
    <div>
      <Link to="/expenses">expenses</Link>
      <Link to="/income">income</Link>
    </div>
  );
};
