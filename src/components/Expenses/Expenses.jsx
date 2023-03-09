import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectBalance } from 'redux/selectors';
import { getExpense } from 'redux/transactions/operation';
import { Transactions } from 'components/Transactions/Transactions';

export const Expenses = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) {
      dispatch(getExpense());
    }
  }, [dispatch, user, balance]);

  return (
    <>
      <div>
        <Transactions />
        <Outlet />
      </div>
    </>
  );
};

export default Expenses;
