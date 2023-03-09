import { Outlet, Link, useLocation } from 'react-router-dom';
import { TabPanel } from 'react-tabs';
import { ReactComponent as ReportsIcon } from '../../images/reports-icon.svg';
import Balance from 'components/Balance/Balance';

import { Background } from './HomePage.styled';

import {
  TabsStyled,
  TabListStyled,
  TabStyled,
  NavLinkStyled,
  BlockHeading
} from './HomePage.styled';

// import { Tab, Tabs, TabList } from 'react-tabs';
// import { NavLink } from 'react-router-dom';
import { useAuth } from './../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const HomePage = () => {
  const location = useLocation();
  const index = location.pathname === '/income' ? 1 : 0;
  const { isLoggedIn } = useAuth();
  const path = location.pathname === '/' ? '/income' : location.pathname;
  console.log(index);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, [navigate, isLoggedIn, path]);
  return (
    <>
      {isLoggedIn ? (
        <Background>
            <BlockHeading>
              <Balance />
              <Link className='reportLink' to="/reports" state={{ from: location }}>
                <span style={{marginBottom: 2}}>Reports</span>
                <ReportsIcon />
              </Link>
            </BlockHeading>
          <TabsStyled selectedIndex={index} onSelect={() => {}}>
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
          </TabsStyled>
        </Background>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default HomePage;
