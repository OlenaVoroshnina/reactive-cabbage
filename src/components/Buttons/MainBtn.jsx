export const MainButton = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
  onDelete,
}) => {
  const handleClick = () => {
    if (children === 'YES') {
      dispatch();
      closeModal();
    }
    if (changeBalance) {
      dispatch();
      closeModal();
    }
    if (children === 'SURE') {
      onDelete();
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default MainButton;
