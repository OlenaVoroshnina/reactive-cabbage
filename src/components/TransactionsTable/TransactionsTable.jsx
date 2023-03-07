// import { selectExpenses } from 'redux/selectors';

export const TransactionsTable = () => {
  // console.log(selectExpenses());
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{/* нужен ответ бекенда */}</tbody>
    </table>
  );
};
