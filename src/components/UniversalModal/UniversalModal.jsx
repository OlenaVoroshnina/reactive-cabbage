import { createPortal } from 'react-dom';
import closeIcon from '../../images/close.svg';
import { useEffect } from 'react';

import MainBtn from 'components/Buttons/MainBtn';
import SecondaryBtn from 'components/Buttons/SecondaryBtn';

import {
  StyledModal,
  StyledContent,
  StyledText,
  StyledWrap,
  StyledClose,
  StyledBackdrop,
} from 'components/UniversalModal/UniversalModal.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

const UniversalModal = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
  onDelete ,
}) => {
  const handleEscapeClose = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  return createPortal(
    <StyledBackdrop onClick={handleBackdropClose}>
      <StyledModal>
        <StyledClose onClick={closeModal}>
          <img src={closeIcon} alt="close" />
        </StyledClose>
        <StyledContent>
          <StyledText>{children}</StyledText>
          <StyledWrap>
            <MainBtn
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
              onDelete={onDelete}
            >
              {text ? text : 'YES'}
            </MainBtn>
            <SecondaryBtn closeModal={closeModal}>NO</SecondaryBtn>
          </StyledWrap>
        </StyledContent>
      </StyledModal>
    </StyledBackdrop>,
    modalRoot
  );
};

export default UniversalModal;
