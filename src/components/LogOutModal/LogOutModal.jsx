import React from 'react';
import { createPortal } from 'react-dom';
import { closeImg } from '../../images/close.svg';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

const LogOutModal = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
  onDelete,
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
    <div onClick={handleBackdropClose}>
      <div>
        <button onClick={closeModal}>
          <img src={closeImg} alt="close" />
        </button>
        <div>
          <p>{children}</p>
          <div>
            <button
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
              onDelete={onDelete}
            >
              {text ? text : 'YES'}
            </button>
            <button closeModal={closeModal}>NO</button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default LogOutModal;
