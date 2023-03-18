import styled from 'styled-components';

export const StyledMainBtn = styled.button`
  padding: 12px 0px;
  width: 136px;
  border: none;
  background-color: #ff751d;
  border-radius: 16px;
  color: #fff;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;

  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #fe9c0a;
  }
`;

export const StyledSecondaryBtn = styled.button`
  padding: 12px 34px;
  width: 136px;
  border: 2px solid #f5f6fb;
  background-color: #fff;
  border-radius: 16px;
  color: #52555f;
  font-size: 12px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.17;

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #ff751d;
    color: #fff;
  }
`;
