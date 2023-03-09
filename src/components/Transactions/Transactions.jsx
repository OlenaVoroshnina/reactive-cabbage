import { TransactionsForm } from 'components/TransactionsForm/TransactionsForm';
import { TransactionsSummary } from 'components/TransactionsSummary/TransactionsSummary';
import { ListTransactions } from './ListTransactions';
import css from './Transactions.module.css';
import BgCabbage from 'components/Backgrounds/BgCabbage/BgCabbage';

export const Transactions = () => {
  return (
    <div className={css.transactions}>
      <TransactionsForm />
      <div className={css.transactionsHistory}>
        <ListTransactions />
        <TransactionsSummary />
      </div>
      <BgCabbage />
    </div>
  );
};
