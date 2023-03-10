import styled from 'styled-components';
import { Tab, Tabs, TabList } from 'react-tabs';
import { NavLink, Link } from 'react-router-dom';

import 'react-tabs/style/react-tabs.css';

export const Background = styled.div`
  top: 0;
  left: 0;
  height: 296px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 10%;
  width: 100%;
  @media (min-width: 321px) {
    height: 526px;
  } ;
`;

export const TabsStyled = styled(Tabs)`
  margin: 0 auto;
  background-color: transparent;
  @media (min-width: 768px) {
    max-width: 704px;
    border-radius: 30px;
    & .react-tabs__tab-panel--selected {
      position: relative;
      top: -24px;
      border-radius: 0 30px 30px 30px;
      box-shadow: 0px 50px 60px rgba(170, 178, 197, 0.2);
      background-color: #ffffff;
    }
  }
  @media (min-width: 1280px) {
    max-width: 1098px;
  }
  & .react-tabs__tab-list {
    border: none;
    margin: 0;
  }
`;
export const TabStyled = styled(Tab)`
  // background-color: #f7741d;
  // width: 50%;
  // height: 53px;
  // padding: 19px 12px;
  // text-align: center;
  // transition: background-color 250ms ease;

  // @media (min-width: 768px) {
  //   background-color: #fefefe;
  //   padding: 13px 12px;
  //   width: 138px;
  //   height: 40px;
  //   border-radius: 30px 30px 0 0;
  // }

  background-color: #fefefe;
  text-decoration: none;
  // background: rgba(250, 251, 253, 1);
  text-align: center;
  text-decoration: none;
  border: none;
  width: 138px;
  height: 40px;
  height: 53px;
  padding: 12px 19px;
  border-radius: 30px 30px 0 0;
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  .active {
    color: #ff751d;
  }
`;

export const TabListStyled = styled(TabList)`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  
  @media (min-width: 768px) {
    position: relative;
    width: 276px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: color 250ms ease;
  @media (min-width: 768px) {
    margin: 0px 25px;
    color: black;
  }
`;

export const StyledReportsBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  line-height: 1.9;
  font-weight: 400;
  color: rgba(82, 85, 95, 0.7);
  :hover,
  :focus {
    color: #ff751d;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    
  }
  @media screen and (min-width: 1280px) {
    /* position: absolute;
    top: 11px;
    right: 0; */
  }
  .reportsIcon {
    margin-left: 15px;
    width: 24px;
    height: 24px;
    fill: #ff751d;

    :hover .reportsIcon,
    :focus .reportsIcon {
      fill: #ff751d;
    }
  }
`;

export const BalanceWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${'' /* justify-content: center;
  align-items: baseline; */}
  padding: 40px 140px 8px;
  margin-bottom: 32px;
`;

export const BlockHeading = styled.div`
  padding-top: 14px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-direction: column-reverse;

  .reportLink {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
    font-size: 12px;
    color: rgba(82, 85, 95, 0.7);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      color: #ff751d;
    }
  }

  @media (min-width: 768px) {
    gap: 251px;
    flex-direction: row;
    align-items: center;
    padding-top: 40px;
    max-width: 704pxpx;
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    width: 1098px;
    gap: 298px;
    justify-content: flex-end;
  }
`;

export const TabWrapper = styled.div`
  position: relative;
  top: 10px;
`;

export const OutletStyled = styled.div`
  padding: 15px;
  display: flex:
`;
