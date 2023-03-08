import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  reportsQueryAction,
  filteredDataAction,
} from 'redux/reportsQuery/reportsQuerySlice';

import ButtonsSwitch from '../ButtonSwitch/ButtonSwitch';
import { monthNames, getMonth, getYear } from './ReportsSliderData';
import { getTransactionsByDate } from '../../../redux/transactions/operation';
import { Wrapper, Text, ReportSliderTitle } from './ReportsSlider.styled';

const ReportsSlider = () => {
  const [monthNumber, setMonthNumber] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    setMonthNumber(getMonth());
    setMonth(monthNames[getMonth()]);
    setYear(getYear());
  }, []);

  useEffect(() => {
    setMonth(monthNames[monthNumber]);
    let month = '';

    if (monthNumber + 1 < 10) {
      month = '0' + (monthNumber + 1);
    } else {
      month = monthNumber + 1;
    }

    const query = `${year}-${month}`;
    if (query !== '-01') dispatch(getTransactionsByDate(query));
    dispatch(reportsQueryAction(`${year}-${month}`));
  }, [monthNumber, year, dispatch]);

  const onHandleClick = name => {
    switch (name) {
      case 'decrement':
        dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber - 1);
        if (monthNumber === 0) {
          setMonthNumber(11);
          setYear(year - 1);
        }
        break;

      case 'increment':
        dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber + 1);
        if (monthNumber === 11) {
          setMonthNumber(0);
          setYear(year + 1);
        }
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <ReportSliderTitle>Current period:</ReportSliderTitle>
      <ButtonsSwitch onButtonClick={onHandleClick}>
        <Text>
          {month} {year}
        </Text>
      </ButtonsSwitch>
    </Wrapper>
  );
};

export default ReportsSlider;
