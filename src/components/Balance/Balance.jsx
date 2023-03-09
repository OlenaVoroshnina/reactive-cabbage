import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance } from 'redux/transactions/operation';
import { selectBalance } from 'redux/selectors';
import UniversalModal from '../UniversalModal/UniversalModal';
// import BalanceModal from 'components/BalanceModal/BalanceModal';
import { StyledBalanceForm } from 'components/Balance/Balance.styled';

const Balance = () => {
  const transactionBalance = useSelector(selectBalance);
  // const isLoading = useSelector(selectIsLoading);
// console.log(typeof transactionBalance);
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
        <button type="submit" className="btn" onClick={handleModalOpen}>
          Confirm
        </button>
      </StyledBalanceForm>

      {/* <BalanceModal /> */}
      {modalOpen && (
        <UniversalModal
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={transactionBalance}
          onDelete={()=>{}}
        >
          Are you sure?
        </UniversalModal>
      )}
    </>
  );
};

export default Balance;
