import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 320px;

  margin: 120px auto;


  @media screen and (min-width: 768px) {
    width: 572px;

    @media screen and (min-width: 1200px) {
      width: 746px;
    }
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  border-bottom: 1px solid #f5f6fb;
`;

export const ItemName = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  width: 188px;
  letter-spacing: 0.04em;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    max-width: 80px;
  }
`;

export const ItemNameCont = styled.div``;

export const ItemDateCont = styled.div`
  display: flex;
  flex-direction: raw;
  gap: 25px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    gap: 8px;
  }
`;

export const ItemDate = styled.p`
  font-size: 12px;
  line-height: 1.12;
  width: 86px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 80px;
  }
`;

export const ItemCategory = styled.p`
  font-size: 12px;
  line-height: 1.12;
  letter-spacing: 0.04em;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    max-width: 120px;
  }
`;
export const SumCont = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;
export const Sum = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  vertical-align: auto;
`;
