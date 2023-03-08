import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BgCabbage from '../../images/imgReports/title_kapusta.png';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 86px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 117px 171px 155px 171px;
  }
  @media screen and (min-width: 1280px) {
    padding: 117px 91px 125px 229px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;
  margin-bottom: 50px;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    width: 306px;
    margin-bottom: 79px;
  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    margin-bottom: 0;
    margin-bottom: 222px;
    align-self: flex-end;
  }
`;

export const ImageTitleLogo = styled.img`
  z-index: 1;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.15em;
  color: #52555f;
  align-self: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.18em;
  }
`;

export const FormContainer = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    margin-top: 117px;
    flex-direction: row;
    justify-content: flex-end;
  } */
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  padding: 40px 20px;
  gap: 32px;
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 426px;
    padding: 56px 84px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
`;

export const Wrap = styled.div`
  /* align-items: center;

  width: 280px;
  padding: 40px 20px;

  background-color: #fff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 426px;
    padding: 56px 84px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 91px;
  } */
`;

export const SubTitle = styled.h3`
  /* margin: 0 auto 16px auto;
  letter-spacing: 0.04em;
  text-align: left;

  @media screen and (min-width: 768px) {
    width: 250px;
    margin: 0 0 20px 0;
    margin-bottom: 30px;
  } */

  display: block;
  height: auto;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #52555f;
  text-align: start;
`;

export const Form = styled.form`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
`;

export const Label = styled.label`
  /* display: flex;
  justify-content: left;
  align-items: baseline;

  padding-bottom: 12px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16;
  } */

  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  /* width: 100%;
  height: 52px;
  padding: 17px 19px;

  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #f6f7fb;

  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: #52555f;

  ::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  } */

  box-sizing: border-box;
  padding: 17px 18px;
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto';
  placeholder: #a6abb9;
  background-color: #f6f7fb;
  border-radius: 30px;
  border: none;
  color: #000000;
  margin-bottom: 4px;
  &:focus {
    outline: 1px solid #ff751d;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

export const NavBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 0;

  width: 116px;
  height: 44px;

  vertical-align: middle;

  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  outline: none;

  font-family: inherit;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  color: #52555f;
  background-color: #f5f6fb;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ffffff;
    background-color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ffffff;
    background-color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 0;

  width: 116px;
  height: 44px;

  vertical-align: middle;

  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  outline: none;

  font-family: inherit;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  color: #ffffff;
  background-color: #ff751d;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #52555f;
    background-color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #52555f;
    background-color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;

export const BottomCabbages = styled.img`
  display: flex;
  flex-direction: column;
  width: 183px;
  margin-bottom: 50px;
  align-self: flex-start;
`;
