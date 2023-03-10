import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  /* margin-bottom: 30px; */
  border: 1px solid transparent;
  border-radius: 20px;
  ${'' /* background-color: var(--primary-bg-color); */}
  background-color: #fff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
`;
export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 20px 10px 25px 10px;
  &:nth-child(2n)::before {
    content: '';
    position: absolute;
    border-left: 1px solid;
    left: 0px;
    bottom: 5px;
    z-index: 1;
    height: 90%;
    color: #e0e5eb;
    @media screen and (min-width: 768px) {
      height: 80%;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 16px 0;
    flex-direction: row;
    &:first-child {
      padding-right: 20px;
      justify-content: flex-end;
    }
    &:last-child {
      padding-left: 20px;
      justify-content: flex-start;
    }
  }
`;
export const ItemText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: #52555f;
`;
export const ItemExpenses = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: #e53935;
`;
export const ItemIncome = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: #407946;
`;
export const Box = styled.div`
  padding-top: 30px;
  margin-top: 32px;
  border-radius: 30px;
    background-color: #fff;
  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    margin-top: 32px;
    border-radius: 30px;
    background-color: #fff;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 205px;
  }
`;

export const Nav = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  width: 130px;
`;
export const NavText = styled.p`
  width: 120px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
`;