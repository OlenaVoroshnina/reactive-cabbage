import { Link } from 'react-router-dom';
import logoImg from 'images/logo.svg';

import { StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logoImg} alt="logo" style={{ margin: '16px 16px 0' }} />
      </Link>
    </StyledHeader>
  );
};
