import { useDispatch, useSelector } from 'react-redux';
import { translateToEng } from 'hooks/useCategory';
import { TransactionTable } from './TransactionsTable.styled';
import { selectExpenses, selectIncomes } from 'redux/selectors';
import { useLocation } from 'react-router-dom';

import { deleteTransaction } from '../../redux/transactions/operation';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { useState } from 'react';
import UniversalModal from 'components/UniversalModal/UniversalModal';

export const TransactionsTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncomes);
  const location = useLocation();
  const transactions = location.pathname === '/expenses' ? expenses : incomes;

  const dispatch = useDispatch();
  let color = null;
  if (transactions[0]) {
    color =
      translateToEng(transactions[0].category) === 'Salary' ||
      translateToEng(transactions[0].category) === 'Additional income'
        ? 'green'
        : 'red';
  }
  let minus = '-';
  if (color === 'green') {
    minus = false;
  }

  const handleModalOpen = id => {
    setModalOpen(true);
    setCurrentId(id);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDelete = event => {
    dispatch(deleteTransaction(currentId));
    setCurrentId(null);
    setModalOpen(false);
  };

  function sortedTransactions(transactions) {
    return transactions.slice().sort((a, b) => {
      const first = new Date(a.date).getTime();
      const second = new Date(b.date).getTime();
      if (first - second === 0) {
        return first;
      }
      return second - first;
    });
  }

  return (
    <>
      <TransactionTable>
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>SUM</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(transactions) &&
            sortedTransactions(transactions)
              .slice(0)
              .map(el => {
                const { _id, description, amount, date, category } = el;
                return (
                  <tr key={_id} style={{ height: 40 }}>
                    <td>{date.split('-').reverse().join('.')}</td>
                    <td>{description}</td>
                    <td>{translateToEng(category)}</td>
                    <td style={{ color }}>
                      {minus} {amount.toFixed(2)}
                    </td>
                    <td>
                      <span
                        className="icon-basket"
                        id={_id}
                        onClick={() => handleModalOpen(_id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <DeleteIcon />
                      </span>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </TransactionTable>
      {modalOpen && (
        <UniversalModal
          closeModal={handleModalClose}
          onDelete={handleDelete}
          text="SURE"
        >
          Are you sure?
        </UniversalModal>
      )}
    </>
  );
};
