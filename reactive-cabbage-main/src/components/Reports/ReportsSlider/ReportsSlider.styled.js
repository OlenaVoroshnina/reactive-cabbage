import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 16px;
  text-align: center;
  position: relative;
  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin-left: auto;
  }
`;

export const Text = styled.button`
  width: 140px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 0 5px;
  border: none;
  color: #000;
  background-color: var(--color-white);
`;

export const ReportSliderTitle = styled.p`
  color: rgba(82, 85, 95, 0.7);
  font-size: 12px;
`;
