import styled from 'styled-components';

export const StyledBgGrey = styled.div`
  position: absolute;
  z-index: -2;
  left: center;
  top: 0;
  margin: 0 auto;
 width: 767px;
  height: 342px;
  background-color: ${props => props.theme.colors.bgGrey};
  border-radius: 0 0 0 112px;

  @media screen and (min-width: 768px) {
    width: 1600px;
    height: 582px;
  }
`;
