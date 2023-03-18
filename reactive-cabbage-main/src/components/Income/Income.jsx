import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getIncome } from 'redux/transactions/operation';
import { Transactions } from 'components/Transactions/Transactions';

export const Income = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncome());
  }, [dispatch]);

  return (
    <>
      <div>
        <Transactions />
        <Outlet />
      </div>
    </>
  );
};

export default Income;
