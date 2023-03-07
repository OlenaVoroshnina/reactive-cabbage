import { Wrapper, Button } from './ButtonsSwitch.styled';
import reportsswitch from '../../../images/reportsswitch.svg';

const ButtonsSwitch = ({ onButtonClick, children }) => {
  const handlerClick = event => {
    const name = event.currentTarget.name;
    onButtonClick(name);
  };

  return (
    <Wrapper>
      <Button name="decrement" onClick={handlerClick}>
        <svg width="6" height="12">
          <use href={`${reportsswitch}#icon-prev`}></use>
        </svg>
      </Button>
      {children}
      <Button name="increment" onClick={handlerClick}>
        <svg width="6" height="12">
          <use href={`${reportsswitch}#icon-next`}></use>
        </svg>
      </Button>
    </Wrapper>
  );
};

export default ButtonsSwitch;