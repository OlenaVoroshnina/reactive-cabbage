import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateBalance } from 'redux/transactions/operation';
import { selectBalance } from 'redux/selectors';
import UniversalModal from '../UniversalModal/UniversalModal';
import BalanceModal from 'components/BalanceModal/BalanceModal';
import {
  StyledBalanceForm,
  BtnsWrapper,
} from 'components/Balance/Balance.styled';

const Balance = () => {
  const transactionBalance = useSelector(selectBalance);
  // const incomeTotal = useSelector(selectIncomeTotal);
  // const isUserOperations = useSelector(selectIncomeTotal).transactions.length;

  // const isLoading = useSelector(selectIsLoading);

  // console.log(typeof transactionBalance);

  const location = useLocation();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();

  let newBalance;

  const handleSubmit = e => {
    e.preventDefault();
    newBalance = e.target.balance.value;
  };

  const handleChange = e => {
    newBalance = e.target.value;
  };

  const handleClick = () => {
    dispatch(updateBalance(newBalance));
    form.current.reset();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledBalanceForm onSubmit={handleSubmit} ref={form}>
        <h2 className="title">Balance:</h2>
        <BtnsWrapper>
          <input
            onChange={handleChange}
            className="inputTag"
            type="number"
            name="balance"
            title="Please, enter your balance"
            pattern="[0-9, .UAH]*"
            placeholder={`${Number(transactionBalance).toFixed(2)} UAH`}
            required
          />

          <button
            type="submit"
            className="btn"
            onClick={handleModalOpen}
            // disabled={incomeTotal === 0}
          >
            Confirm
          </button>
        </BtnsWrapper>
      </StyledBalanceForm>

      {/* {transactionBalance === 0 && <BalanceModal />} */}
      {/* {!incomeTotal && <BalanceModal />} */}

      {location.pathname === '/expenses' && <BalanceModal />}

      {modalOpen && (
        <UniversalModal
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={transactionBalance}
          onDelete={() => {}}
        >
          Are you sure?
        </UniversalModal>
      )}
    </>
  );
};

export default Balance;
