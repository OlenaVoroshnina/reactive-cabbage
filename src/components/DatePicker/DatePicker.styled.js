import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  .calendarIcon {
    width: 20px;
    height: 20px;
    fill: #52555f;
  }
  .datePicker {
    display: flex;
    gap: 8px;
    align-items: center;
    height: 20px;
    font-size: 12px;
    font-weight: 900;
    line-height: calc(14 / 12);
    letter-spacing: 1.04;
    color: #52555f;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 34px 32px;
    :hover,
    :focus {
      color: #ff751d;
    }
    :hover .calendarIcon,
    :focus .calendarIcon {
      fill: #ff751d;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
      margin-top: 0;
    }
  }
`;
