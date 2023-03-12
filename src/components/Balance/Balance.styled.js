import styled from 'styled-components';

export const StyledBalanceForm = styled.form`
  /* margin: 0 auto 50px; */
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 20px;
    margin: 0 auto;

    @media screen and (min-width: 320px) and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 0;
    }
  }

  .title {
    color: rgba(82, 85, 95, 0.7);
    margin-bottom: 8px;
    font-size: 12px;
    line-height: calc(14 / 12);
    font-weight: 500;
    text-align: center;
  }
  .inputTag {
    font-weight: 700;
    width: 125px;
    /* height: 44px; */
    /* padding: 22px 0px; */
    color: #52555f;
    text-align: center;
    border: 2px solid white;
    border-radius: 16px;
    outline: none;
    background-color: #f2f5fc;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    :focus {
      background-color: #fff;
    }
    &::placeholder {
      color: #000;
      letter-spacing: 0.02em;
      font-weight: 700;
      font-size: 12px;
      line-height: 1.17;
    }
    @media screen and (min-width: 768px) {
      width: 125px;
      /* padding: 12px 0px; */
      border-radius: 16px;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
      width: 140px;
      height: 44px;
      padding: 20px 0px;
      border-radius: 22px 0 0 22px;
    }
  }
  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    background-color: #f2f5fc;
    width: 125px;
    height: 44px;
    padding: 12px 18px;
    color: rgba(82, 85, 95, 0.7);
    text-align: left;
    text-transform: uppercase;
    border: 2px solid white;
    border-left: none;
    border-radius: 16px;
    outline: none;
    transition-property: color, background-color, border-color, box-shadow,
      transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      color: white;
      background-color: #ff751d;
      border-color: #ff751d;
      box-shadow: 0px 0px 2px 1px #f5f6fb;
      transform: scale(1.01);
    }
    @media screen and (min-width: 768px) {
      width: 125px;
      padding: 12px 6px;
      border-radius: 16px;
      text-align: center;
      border-left: 2px solid white;
    }
    @media screen and (min-width: 320px) and (max-width: 767px) {
      width: 140px;
      height: 44px;
      border-radius: 0 22px 22px 0;
    }
  }
`;
export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    gap: 0;
  }
`;
