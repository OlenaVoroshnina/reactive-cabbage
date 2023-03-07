import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { StyledDatePicker } from './DatePicker.styled';
import { ReactComponent as Calendar } from '../../images/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';

const SelectDataPicker = ({ startDate, setStartDate }) => {
  const handleClick = event => {
    event.preventDefault();
  };

  const ExampleInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="datePicker" onClick={onClick} ref={ref}>
      <Calendar className="calendarIcon" />
      {value}
    </button>
  ));
  return (
    <StyledDatePicker onClick={handleClick}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleInput />}
      />
    </StyledDatePicker>
  );
};

export default SelectDataPicker;

SelectDataPicker.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func.isRequired,
};
