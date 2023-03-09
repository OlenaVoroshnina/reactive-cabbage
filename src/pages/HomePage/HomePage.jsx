import { Outlet, Link, useLocation } from 'react-router-dom';
// import { Tab, Tabs, TabList} from 'react-tabs';
import { TabPanel } from 'react-tabs';
// import { NavLink } from 'react-router-dom';
import { ReactComponent as ReportsIcon } from '../../images/reports-icon.svg';
import Balance from 'components/Balance/Balance';

import { Background } from './HomePage.styled';

import {
  TabsStyled,
  TabListStyled,
  TabStyled,
  NavLinkStyled,
} from './HomePage.styled';

import BgGrey from 'components/Backgrounds/BgGrey/BgGrey';
import BgCabbage from 'components/Backgrounds/BgCabbage/BgCabbage';


export const HomePage = () => {
  const location = useLocation();

  return (

    <>
      <Background>
        <div>
          <Balance />
          <Link to="/reports" state={{ from: location }}>
            <span>Reports</span>
            <ReportsIcon />
          </Link>
        </div>

        <TabsStyled>
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
    </>

  );
};

export default HomePage;
