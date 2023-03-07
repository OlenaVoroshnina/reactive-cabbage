import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { deleteTransaction } from 'redux/transactions/operation';
import { useState, useEffect } from 'react';
import UniversalModal from '../universalModal/universalModal';
import { getAllUserInfo } from 'redux/auth/operation';

export const ListTransactions = () => {
  const allTransactions = useSelector(state => state.auth.transactions);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const sortedTransactions = allTransactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });

  useEffect(() => {
    dispatch(getAllUserInfo());
  }, [allTransactions, dispatch]);

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
    <ul>
      {sortedTransactions.slice(0, 7).map(item => {
        const { _id, description, amount, date, category } = item;
        let color;
        let minus = false;
        if (category === 'salary' || category === 'add income') {
          color = 'green';
        } else {
          color = 'red';
          minus = '-';
        }

        return (
          <li key={_id}>
            <div>
              <p>{description}</p>
              <div>
                <p>{date}</p>
                <p>{category}</p>
              </div>
            </div>
            <div>
              <p style={{ color }} className="sum">
                {minus} {amount.toFixed(2)}
              </p>
              <span
                id={_id}
                onClick={() => handleModalOpen(_id)}
                style={{ cursor: 'pointer' }}
              >
                <DeleteIcon />
              </span>
            </div>
          </li>
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
    </ul>
  );
};
