import React from 'react';
import DatePicker from 'react-datepicker';
import { StyledDatePicker } from './DatePicker.styled';
import { ReactComponent as Calendar } from '../../images/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const SelectDataPicker = ({ getDate }) => {
  const [startDate, setStartDate] = useState(new Date());

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
        onChange={date => {
          setStartDate(date);
          getDate(date);
        }}
        customInput={<ExampleInput />}
      />
    </StyledDatePicker>
  );
};

export default SelectDataPicker;
