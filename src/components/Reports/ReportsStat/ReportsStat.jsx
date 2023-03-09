import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIncomeTotal, selectExpensesTotal } from 'redux/selectors';
import { filteredDataAction } from 'redux/reportsQuery/reportsQuerySlice';

import { ReportsList } from 'components/Reports/ReportsList/ReportsList';
import ButtonsSwitch from 'components/Reports/ButtonSwitch/ButtonSwitch';
// import { ReportsTable } from 'components/Reports/Table/ReportsTable';
import { BarChartComponent } from 'components/Reports/BarChartComponent/BarChartComponent';

import {
  List,
  Item,
  ItemText,
  ItemExpenses,
  ItemIncome,
  Nav,
  NavText,
  Box,
} from 'components/Reports/ReportsStat/ReportsStat.styled';

export const ReportsStat = () => {
  const dispatch = useDispatch();
  const incomeTotal = useSelector(selectIncomeTotal);
  const expensesTotal = useSelector(selectExpensesTotal);
  const [budget, setBudget] = useState('expenses');

  const handleClick = () => {
    if (budget === 'expenses') {
      setBudget('incomes');
      dispatch(filteredDataAction([]));
      return;
    }
    setBudget('expenses');
    dispatch(filteredDataAction([]));
  };

  return (
    <div>
      <List>
        <Item>
          <ItemText>Expenses:</ItemText>
          <ItemExpenses>- {expensesTotal.toFixed(2) ?? 0}</ItemExpenses>
        </Item>
        <Item>
          <ItemText>Income:</ItemText>
          <ItemIncome>+ {incomeTotal.toFixed(2) ?? 0}</ItemIncome>
        </Item>
      </List>

      <Box>
        <Nav>
          <ButtonsSwitch onButtonClick={handleClick}>
            <NavText>{budget}</NavText>
          </ButtonsSwitch>
        </Nav>

        <ReportsList onChange={budget}></ReportsList>
      </Box>
      <BarChartComponent budget={budget} />
      {/* <ReportsTable onChange={budget}></ReportsTable> */}
    </div>
  );
};
