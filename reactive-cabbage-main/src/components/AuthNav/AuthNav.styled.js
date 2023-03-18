import styled from 'styled-components';

export const AuthNavContainer = styled.nav`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
`;

export const AuthNavExitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserAvatar = styled.div`
  padding: 9px 12px;
  font-size: 12px;
  line-height: 1.17;
  font-weight: 700;
  color: #52555f;
  background-color: #f5f6fa;
  border-radius: 50%;
`;

export const UserEmail = styled.p`
  display: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
  line-height: 1.17;
  color: #52555f;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const LogoutImg = styled.img`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Divider = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 1px;
    height: 36px;
    background-color: #e0e5eb;
  }
`;

export const ExitButton = styled.button`
  display: none;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #ff751d;
  }
  @media screen and (min-width: 768px) {
    display: block;
    cursor: pointer;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    font-size: 12px;
    line-height: 1.17;
    color: #52555f;
  }
`;
