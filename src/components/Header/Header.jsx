import { Link } from 'react-router-dom';
import logoImg from 'images/logo.svg';

import Container from 'components/Container/Container';

import { StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
      </Container>
    </StyledHeader>
  );
};
