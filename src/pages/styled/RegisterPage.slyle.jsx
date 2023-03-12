import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PasswordIcon = styled.img`
  display: block;
  /* width: 100%; */
`;
export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 86px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 117px 171px 155px 171px;
  }
  @media screen and (min-width: 1280px) {
    padding: 117px 91px 125px 229px;
  }
`;

export const ContentWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media screen and (min-width: 1280px) {
    width: 100%;
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
  box-sizing: border-box;
  padding: 17px 18px;
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto';
  /* placeholder: #a6abb9; */
  background-color: #f6f7fb;
  border-radius: 30px;
  border: none;
  color: #000000;
  margin-bottom: 32px;
  &:focus {
    outline: 1px solid #ff751d;
  }
`;

export const PasswordBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-30px, 15px);
  border: none;
  background-color: transparent;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const NavBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 10px;

  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  outline: none;
  text-decoration: none;

  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  color: #52555f;
  background-color: #f5f6fb;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    border: 1px solid #ff751d;
    background-color: transparent;
    color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    border: 1px solid #ff751d;
    background-color: transparent;
    color: #ff751d;
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

  padding: 12px 32px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;

  border: none;
  border-radius: 16px;
  outline: none;

  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  background-color: #ff751d;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ff751d;
    border: 1px solid #ff751d;
    background-color: transparent;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ff751d;
    border: 1px solid #ff751d;
    background-color: transparent;
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

export const GoogleLoginLink = styled.a`
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 116px;
  min-height: 44px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: 350ms ease-in-out;
  color: #000000;
  background-color: #f5f6fb;
  padding: 10px 16px;
  border-radius: 26px;
  border: none;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background-color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  &:active {
    background-color: #ff751d;
    color: white;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  & > svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 768px) {
    min-width: 122px;
  }
`;
