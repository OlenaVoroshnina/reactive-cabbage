import styled from 'styled-components';

export const StyledHeader = styled.div`
position: relative;
  height: 56px;
  background-color: ${props => props.theme.colors.bgWhite};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
  }
`;
