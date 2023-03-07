import React from 'react';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

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
      <div onClick={handleBackdropClick}>
        <div>
          <p>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p>You can't spend money until you have it :)</p>
        </div>
      </div>
    ),
    modalRoot
  );
};

export default BalanceModal;
