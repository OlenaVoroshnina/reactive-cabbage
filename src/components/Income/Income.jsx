import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectBalance } from 'redux/selectors';
import { getIncome } from 'redux/transactions/operation';
import { Transactions } from 'components/Transactions/Transactions';

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
        fff
        <Transactions />
        <Outlet />
      </div>
    </>
  );
};

export default Income;