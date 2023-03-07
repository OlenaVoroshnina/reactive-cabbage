import { Link } from 'react-router-dom';
import logoImg from 'images/logo.svg';

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
      </header>
    </>
  );
};
