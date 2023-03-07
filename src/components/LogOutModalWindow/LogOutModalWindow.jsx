import { createPortal } from 'react-dom';
import close from '../../../images/close.svg';
import { useEffect } from 'react';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

const logOutModalWindow = () => {
  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
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
          <img src={close} alt="close" />
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

export default logOutModalWindow;
