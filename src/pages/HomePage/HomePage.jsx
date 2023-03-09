import { Outlet, Link, useLocation } from 'react-router-dom';
// import { Tab, Tabs, TabList} from 'react-tabs';
import { TabPanel } from 'react-tabs';
// import { NavLink } from 'react-router-dom';
import { ReactComponent as ReportsIcon } from '../../images/reports-icon.svg';
import Balance from 'components/Balance/Balance';

import { Background } from './HomePage.styled';

// import {
//   TabsStyled,
//   TabListStyled,
//   TabStyled,
//   NavLinkStyled,
// } from './HomePage.styled';

import { Tab, Tabs, TabList } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import { useAuth } from './../../hooks/useAuth';
import { LoginPage } from 'pages/LoginPage';

export const HomePage = () => {
  const location = useLocation();
  const index = location.pathname === '/income' ? 1 : 0;
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Background>
          <div>
            <Balance />
            <Link to="/reports" state={{ from: location }}>
              <span>Reports</span>
              <ReportsIcon />
            </Link>
          </div>

          <Tabs selectedIndex={index} onSelect={() => {}}>
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

          {/* <TabsStyled>
          <TabListStyled>
            <TabStyled>
              <NavLinkStyled to="expenses">Expenses</NavLinkStyled>
            </TabStyled>
            <TabStyled>
              <NavLinkStyled to="income">Income</NavLinkStyled>
            </TabStyled>
          </TabListStyled>
          <TabPanel>{<Outlet />}</TabPanel>
          <TabPanel>{<Outlet />}</TabPanel>
        </TabsStyled> */}
        </Background>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default HomePage;
