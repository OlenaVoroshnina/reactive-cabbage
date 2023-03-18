import { Outlet, useLocation } from 'react-router-dom';
import { TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { ReactComponent as ReportsIcon } from '../../images/reports-icon.svg';
import { useAuth } from './../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Balance from 'components/Balance/Balance';

import {
  Background,
  StyledReportsBtn,
  BalanceWrapper,
  TabsStyled,
  TabListStyled,
  TabStyled,
  NavLinkStyled,
  TabWrapper,
  // OutletStyled,
  // BlockHeading
} from './HomePage.styled';

export const HomePage = () => {
  const location = useLocation();
  const index = location.pathname === '/income' ? 1 : 0;
  const { isLoggedIn } = useAuth();
  const path = location.pathname === '/' ? '/income' : location.pathname;
  // console.log(index);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, [navigate, isLoggedIn, path]);
  return (
    <>
      {isLoggedIn ? (
        <Background>
          <BalanceWrapper>
            <Balance />
            <StyledReportsBtn to="/reports" state={{ from: location }}>
              <span>Reports</span>
              <ReportsIcon className="reportsIcon" />
            </StyledReportsBtn>
          </BalanceWrapper>

          <TabsStyled selectedIndex={index} onSelect={() => {}}>
            <TabListStyled>
              <TabStyled>
                <NavLinkStyled to="expenses" style={{ textDecoration: 'none' }}>
                  Expenses
                </NavLinkStyled>
              </TabStyled>
              <TabStyled>
                <NavLinkStyled to="income" style={{ textDecoration: 'none' }}>
                  Income
                </NavLinkStyled>
              </TabStyled>
            </TabListStyled>
            <TabWrapper>
              <TabPanel>{<Outlet />}</TabPanel>
              <TabPanel>{<Outlet />}</TabPanel>
            </TabWrapper>
          </TabsStyled>
        </Background>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default HomePage;
