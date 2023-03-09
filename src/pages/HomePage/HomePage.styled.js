import styled from 'styled-components';
import { Tab, Tabs, TabList } from 'react-tabs';
import { NavLink } from 'react-router-dom';

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
  background-color: #ffffff;
  @media (min-width: 768px) {
    max-width: 704px;
    box-shadow: inset 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
  @media (min-width: 1280px) {
    max-width: 1098px;
    margin: 0 auto;
    box-shadow: inset 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;
export const TabStyled = styled(Tab)`
  background-color: #fefefe;
  border: none;
  width: 138px;
  height: 40px;
  border-radius: 30px 30px 0 0;
`;

export const TabListStyled = styled(TabList)`
  background-color: #f5f6fb;
  border: none;
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 0 25px;
  color: #ff751d;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
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
