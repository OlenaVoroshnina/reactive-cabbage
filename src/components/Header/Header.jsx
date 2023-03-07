import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src="../../images/logo.png" alt="logo" />
        </Link>
      </header>
    </>
  );
};
