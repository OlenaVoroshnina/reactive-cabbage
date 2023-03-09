import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoutImg from 'images/logout.svg';
import logoImg from 'images/logo.svg';
import { selectUserEmail } from 'redux/selectors';
import { selectIsLoggedIn } from 'redux/selectors';
import UniversalModal from 'components/UniversalModal/UniversalModal';
import { logOut } from 'redux/auth/operation';

import {
  AuthNavContainer,
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
            <img src={logoImg} alt="logo" />
          </Link>
          <UserAvatar>{userEmail[0].toUpperCase()}</UserAvatar>
          <UserEmail>{userEmail}</UserEmail>
          <LogoutImg src={logoutImg} alt="logout" onClick={handleModalOpen} />
          <Divider></Divider>
          <ExitButton type="button" onClick={handleModalOpen}>
            Exit
          </ExitButton>
        </AuthNavContainer>
        {modalOpen && (
          // <p closeModal={handleModalClose} dispatch={handleClick}>
          //   Do you really want to leave?
          // </p>
          <UniversalModal closeModal={handleModalClose} dispatch={handleClick}>
            Do you really want to leave?
          </UniversalModal>
        )}
      </>
    )
  );
};
