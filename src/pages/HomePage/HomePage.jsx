import { Outlet, Link, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ReportsIcon } from '../../images/reports-icon.svg';
import Balance from 'components/Balance/Balance';
import BgGrey from 'components/Backgrounds/BgGrey/BgGrey';
import BgCabbage from 'components/Backgrounds/BgCabbage/BgCabbage';

export const HomePage = () => {
  const location = useLocation();

  return (
    <div style={{ position: 'relative' }}>
      <div>
        <Balance />
        <Link to="/reports" state={{ from: location }}>
          <span>Reports</span>
          <ReportsIcon />
        </Link>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <NavLink to="expenses">Expenses</NavLink>
          </Tab>
          <Tab>
            <NavLink to="income">Income</NavLink>
          </Tab>
        </TabList>
        <TabPanel>{<Outlet />}</TabPanel>
        <TabPanel>{<Outlet />}</TabPanel>
      </Tabs>
      <BgGrey />
      <BgCabbage/>
    </div>
  );
};

export default HomePage;
