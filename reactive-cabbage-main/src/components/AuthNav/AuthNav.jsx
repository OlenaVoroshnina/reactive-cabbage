import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoutImg from 'images/logout.svg';
// import logoImg from 'images/logo.svg';
import { selectUserEmail } from 'redux/selectors';

import { selectIsLoggedIn } from 'redux/selectors';

import UniversalModal from 'components/UniversalModal/UniversalModal';
import { logOut } from 'redux/auth/operation';

import {
  AuthNavContainer,
  AuthNavExitWrapper,
  UserAvatar,
  UserEmail,
  LogoutImg,
  Divider,
  ExitButton,
} from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    isLoggedIn && (
      <>
        <AuthNavContainer>
          <Link to="/">
            {/* <img src={logoImg} alt="logo" /> */}

            <iframe
              title="logo-animated"
              id="SVGmator__7vnwsv1678554784723"
              frameBorder="0"
              width="90"
              height="31"
              src="https://www.svgmator.com/embed/VlUnnviqm3x0jMU?onload=true&onclick=true&onhover=true "
            ></iframe>

            {/* <iframe
              title="logo-animated"
              id="SVGmator__vcg4oa1678557706203"
              width="90"
              height="31"
              frameBorder="0"
              src="https://www.svgmator.com/embed/lUfymS2pNOxqWVI?onload=true&onclick=true&onhover=true&loop=true"
            ></iframe> */}

            {/* <iframe
              title="logo-animated"
              width="90"
              height="31"
              id="SVGmator__dzdc51678554457508"
              frameBorder="0"
              src="https://www.svgmator.com/embed/WuD4CUdZb9ggJfO?onload=true&onclick=true&onhover=true"
            ></iframe> */}
          </Link>
          <AuthNavExitWrapper>
            <UserAvatar>{userEmail[0].toUpperCase()}</UserAvatar>
            <UserEmail>{userEmail}</UserEmail>
            <LogoutImg src={logoutImg} alt="logout" onClick={handleModalOpen} />
            <Divider></Divider>
            <ExitButton type="button" onClick={handleModalOpen}>
              Exit
            </ExitButton>
          </AuthNavExitWrapper>
        </AuthNavContainer>
        {modalOpen && (
          <UniversalModal closeModal={handleModalClose} dispatch={handleClick}>
            Do you really want to leave?
          </UniversalModal>
        )}
      </>
    )
  );
};
