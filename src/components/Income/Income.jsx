import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectBalance } from 'redux/selectors';
import { getIncome } from 'redux/transactions/operation';
import { Transactions } from 'components/Transactions/Transactions';
// import { TransactionsSummary } from 'components/TransactionsSummary/TransactionsSummary';

export const Income = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) {
      dispatch(getIncome());
    }
  }, [dispatch, user, balance]);

  return (
    <>
      <div>
       
        <Transactions />
        <Outlet />
      </div>
      {/* <TransactionsSummary/> */}
    </>
  );
};

export default Income;
