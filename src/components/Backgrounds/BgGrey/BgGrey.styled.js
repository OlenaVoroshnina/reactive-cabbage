import styled from 'styled-components';

export const StyledBgGrey = styled.div`
  position: absolute;
  z-index: -1;
  left: center;
  top: -56;
  margin: 0 auto;
 width: 767px;
  height: 296px;
  background-color: ${props => props.theme.colors.bgGrey};
  border-radius: 0 0 0 112px;

  @media screen and (min-width: 768px) {
    width: 1600px;
    height: 526px;
  }
`;
