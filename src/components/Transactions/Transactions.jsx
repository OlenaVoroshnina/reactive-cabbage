import { TransactionsForm } from 'components/TransactionsForm/TransactionsForm';
import { TransactionsSummary } from 'components/TransactionsSummary/TransactionsSummary';
import { ListTransactions } from './ListTransactions';
import css from './Transactions.module.css';

export const Transactions = () => {
  return (
    <div className={css.transactions}>
      <TransactionsForm />
      <div className={css.transactionsHistory}>
        <ListTransactions />
        <TransactionsSummary />
      </div>
    </div>
  );
};
