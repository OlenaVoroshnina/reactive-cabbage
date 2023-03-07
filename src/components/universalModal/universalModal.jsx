import { createPortal } from 'react-dom';
import { closeImg } from '../../images/close.svg';
import { useEffect } from 'react';

import MainBtn from 'components/Buttons/MainBtn';
import SecondaryBtn from 'components/Buttons/SecondaryBtn';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

const UniversalModal = ({
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
            <MainBtn
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
              onDelete={onDelete}
            >
              {text ? text : 'YES'}
            </MainBtn>
            <SecondaryBtn closeModal={closeModal}>NO</SecondaryBtn>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default UniversalModal;
