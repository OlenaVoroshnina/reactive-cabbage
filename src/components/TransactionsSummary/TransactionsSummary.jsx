import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import monthNameTranslate from './SummaryMonthTranslate';
import css from './TransactionsSummary.module.css';

import {
  selectIncomeSummary,
  selectExpensesSummary,
} from 'redux/selectors';

export const TransactionsSummary = () => {
	 const location = useLocation();
  
   const incomeData = useSelector(selectIncomeSummary);
   const expensesData = useSelector(selectExpensesSummary);

   let data;

   if (location.pathname === '/income') {
     data = Object.entries(incomeData) ?? [];
   }

   if (location.pathname === '/expenses') {
     data = Object.entries(expensesData) ?? [];
   }

	return (
    <table className={css.summaryTable}>
      <thead>
        <tr aria-colspan={2} className={css.summaryTableRow}>
          <th className={css.summaryTableTitle}>Summary</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(item => {
          if (item[1] === 'N/A') {
            return false;
          } else {
            return (
              <tr key={`${item[0]}${item[1]}`} className={css.summaryTableRow}>
                <td>{monthNameTranslate(item[0])}</td>
                <td>{item[1].toFixed(2)}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};
