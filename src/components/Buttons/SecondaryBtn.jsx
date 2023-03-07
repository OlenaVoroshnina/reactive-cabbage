export const SecondaryButton = ({ children, closeModal }) => {
  return <button onClick={closeModal}>{children}</button>;
};

export default SecondaryButton;
