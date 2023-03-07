import { TransactionsForm } from 'components/TransactionsForm/TransactionsForm';
import { TransactionsSummary } from 'components/TransactionsSummary/TransactionsSummary';
import { TransactionsTable } from 'components/TransactionsTable/TransactionsTable';
import css from './Transactions.module.css';

// заменить форму транзакций (TransactionsForm) на компонент Юли (InputForm) !!!

export const Transactions = () => {
  return (
    <div className={css.transactions}>
      <TransactionsForm />
      <div className={css.transactionsHistory}>
        <TransactionsTable />
        <TransactionsSummary />
      </div>
    </div>
  );
};
