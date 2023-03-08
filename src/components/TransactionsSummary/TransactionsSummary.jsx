import css from './TransactionsSummary.module.css';

export const TransactionsSummary = () => {
  return (
    <table className={css.summaryTable}>
      <thead>
        <tr aria-colspan={2} className={css.summaryTableRow}>
          <th className={css.summaryTableTitle}>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr className={css.summaryTableRow}>
          <td>January</td>
          <td>10000.00</td>
        </tr>
      </tbody>
    </table>
  );
};
