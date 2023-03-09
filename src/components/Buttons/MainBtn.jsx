import { StyledMainBtn } from 'components/Buttons/Buttons.styled';

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

  return <StyledMainBtn onClick={handleClick}>{children}</StyledMainBtn>;
};

export default MainButton;
