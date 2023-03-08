import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectBalance } from 'redux/selectors';
import { getIncome } from 'redux/transactions/operation';
import { InputForm } from 'components/InputForm/InputForm';
import { ListTransactions } from 'components/Transactions/ListTransactions';
import DatePicker from 'components/DatePicker';

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
        <DatePicker />
        <InputForm />

        <Outlet />
        <ListTransactions />
      </div>
    </>
  );
};
