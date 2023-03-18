import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import {
  StyledBackdrop,
  StyledModal,
  StyledText,
  StyledTitle,
} from 'components/BalanceModal/BalanceModal.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

const BalanceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
    body.classList.remove('no-scroll');
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleModalClose();
    }
  };

  useEffect(() => {
    body.classList.add('no-scroll');
    return () => body.classList.remove('no-scroll');
  }, []);

  return createPortal(
    isModalOpen && (
      <StyledBackdrop onClick={handleBackdropClick}>
        <StyledModal>
          <StyledTitle>
            Hello! To get started, enter the current balance of your account!
          </StyledTitle>
          <StyledText>You can't spend money until you have it :)</StyledText>
        </StyledModal>
      </StyledBackdrop>
    ),
    modalRoot
  );
};

export default BalanceModal;
