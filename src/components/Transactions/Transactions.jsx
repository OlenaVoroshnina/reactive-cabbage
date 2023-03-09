import { TransactionsFormExpenses } from 'components/TransactionsForm/FormExpenses';
import { TransactionsFormIncome } from 'components/TransactionsForm/FormIncome';
import { TransactionsSummary } from 'components/TransactionsSummary/TransactionsSummary';
import { useLocation } from 'react-router-dom';
import { ListTransactions } from './ListTransactions';
import css from './Transactions.module.css';

export const Transactions = () => {
  const location = useLocation();

  return (
    <div className={css.transactions}>
      {location.pathname === '/expenses' && <TransactionsFormExpenses />}
      {location.pathname === '/income' && <TransactionsFormIncome />}
      <div className={css.transactionsHistory}>
        <ListTransactions />
        <TransactionsSummary />
      </div>
    </div>
  );
};
