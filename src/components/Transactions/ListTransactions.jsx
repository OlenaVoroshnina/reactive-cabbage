import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { deleteTransaction } from 'redux/transactions/operation';
import { useState, useEffect } from 'react';
import UniversalModal from 'components/UniversalModal/UniversalModal';
import { getAllUserInfo } from 'redux/auth/operation';
import { translateToEng } from 'hooks/useCategory';

import {
  ItemName,
  ItemNameCont,
  ItemDate,
  ItemDateCont,
  ItemStyled,
  ItemCategory,
  Sum,
  SumCont,
  StyledList,
} from 'components/Transactions/ListTransactions.styled';
import { useLocation } from 'react-router-dom';
import { selectExpenses, selectIncomes } from 'redux/selectors';

export const ListTransactions = () => {
  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncomes);
  const location = useLocation();
  let transactions = location.pathname === '/expenses' ? expenses : incomes;

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });

  useEffect(() => {
    dispatch(getAllUserInfo());

  }, [transactions, dispatch]);

  }, [dispatch]);


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

  return (
    <StyledList>
      {sortedTransactions.slice(0, 7).map(item => {
        const { _id, description, amount, date, category } = item;
        let color;
        let minus = false;
        if (
          translateToEng(category) === 'Salary' ||
          translateToEng(category) === 'Add income'
        ) {
          color = 'green';
        } else {
          color = 'red';
          minus = '-';
        }

        return (
          <ItemStyled key={_id}>
            <ItemNameCont>
              <ItemDateCont>
                <ItemDate>{date}</ItemDate>
                <ItemName>{description}</ItemName>
                <ItemCategory>{translateToEng(category)}</ItemCategory>
              </ItemDateCont>
            </ItemNameCont>
            <SumCont>
              <Sum style={{ color }} className="sum">
                {minus} {amount.toFixed(2)}
              </Sum>
              <span
                id={_id}
                onClick={() => handleModalOpen(_id)}
                style={{ cursor: 'pointer' }}
              >
                <DeleteIcon />
              </span>
            </SumCont>
          </ItemStyled>
        );
      })}
      {modalOpen && (
        <UniversalModal
          closeModal={handleModalClose}
          onDelete={handleDelete}
          text="SURE"
        >
          Are you sure?
        </UniversalModal>
      )}
    </StyledList>
  );
};
