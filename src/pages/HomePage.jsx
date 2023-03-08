import { Outlet, Link, useLocation } from 'react-router-dom';
import Balance from 'components/Balance/Balance';
import { ReactComponent as ReportsIcon } from '../images/reports-icon.svg';
import { NavTransactions } from 'components/Transactions/NavTransactions';
import { ListTransactions } from 'components/Transactions/ListTransactions';
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <div>
          {/* <Balance /> */}
          <NavLink to="/expenses">ExpensesPage</NavLink>
          <br />
          <NavLink to="/income">IncomePage</NavLink>
          <br />
          <Link to="/reports" state={{ from: location }}>
            <span>Reports</span>
            <ReportsIcon />
          </Link>
        </div>
        <NavTransactions />
        <Outlet />
        <ListTransactions />
      </div>
    </>
  );
};

export default HomePage;
