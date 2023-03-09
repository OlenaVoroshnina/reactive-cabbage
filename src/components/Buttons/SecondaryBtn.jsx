import { StyledSecondaryBtn } from 'components/Buttons/Buttons.styled';

export const SecondaryButton = ({ children, closeModal }) => {
  return (
    <StyledSecondaryBtn onClick={closeModal}>{children}</StyledSecondaryBtn>
  );
};

export default SecondaryButton;
