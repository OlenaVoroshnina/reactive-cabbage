import styled from 'styled-components';
export const TransactionTable = styled.table`
  position: relative;
  border-collapse: collapse;
  display: flex;
  align-items: center;
  flex-direction: column;

  th {
    width: 100%;
    height: 38px;
    background: #f5f6fb;
    color: #000;
    border: none;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    border-collapse: collapse;
  }
  tr th:first-child {
    border-radius: 16px 0 0 0;
  }
  tr th:last-child {
    border-radius: 0 16px 0 0;
  }
  thead {
    width: 624px;
    justify-content: center;
    @media screen and (min-width: 1280px) {
      width: 746px;
    }
    tr {
      justify-content: center;
      display: flex;

      th {
        align-items: center;
        justify-content: center;
        flex: 1 0 calc(100% / 5);
        display: flex;
      }
    }
  }
  tbody {
    width: 624px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 344px;
    border-left: 2px solid #f5f6fb;
    border-top: none;
    border-bottom: 2px solid #f5f6fb;
    @media screen and (min-width: 768px) {
      min-height: 344px;
      max-height: 480px;
      /* width: 746px; */
      height: auto;
    }
    @media screen and (min-width: 1280px) {
      width: 746px;
    }
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f5f6fb;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #ff751d;
      border-radius: 8px;
    }

    tr {
      justify-content: center;
      display: flex;
      /* gap: 8px; */
      &:not(:last-child) {
        border-bottom: 2px solid #f5f6fb;
      }
      td {
        position: relative;
        align-items: center;
        justify-content: center;
        /* padding-left: 24px; */
        flex: 1 0 calc(100% / 5);
        overflow-x: hidden;
        display: flex;
        height: 40px;
        overflow: hidden;
        font-size: 12px;
        text-align: center;

        @media (min-width: 1280px) {
          /* padding-left: 36px; */
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.25s ease-in-out;
          :hover {
            width: 32px;
            height: 32px;
            background-color: #f5f6fb;
            border-radius: 50%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
