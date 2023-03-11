import { TransactionsFormExpenses } from 'components/TransactionsForm/FormExpenses';
import { TransactionsFormIncome } from 'components/TransactionsForm/FormIncome';
import { TransactionsSummary } from 'components/TransactionsSummary/TransactionsSummary';
import { useLocation } from 'react-router-dom';
import css from './Transactions.module.css';
import BgCabbage from 'components/Backgrounds/BgCabbage/BgCabbage';
import { ListTransactions } from './ListTransactions';
import { TransactionsTable } from 'components/TransactionsTable/TransactionsTable';
import { useMediaQuery } from 'react-responsive';

export const Transactions = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '((min-width: 768px) and (max-width: 1279px))',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className={css.transactions}>
      {location.pathname === '/expenses' && <TransactionsFormExpenses />}
      {location.pathname === '/income' && <TransactionsFormIncome />}
      <div className={css.transactionsHistory}>
        {isMobile && <ListTransactions />}
        {isTablet && <TransactionsTable />}
        {isDesktop && <TransactionsTable />}

        {!isMobile && <TransactionsSummary />}
      </div>
      <BgCabbage />
    </div>
  );
};
