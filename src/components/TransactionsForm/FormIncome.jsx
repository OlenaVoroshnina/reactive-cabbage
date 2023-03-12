import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from 'redux/transactions/operation';
import SelectDataPicker from 'components/DatePicker/DatePicker';
import { format } from 'date-fns';
import { translateToRus } from 'hooks/useCategory';
import css from './TransactionsForm.module.css';
import calculator from '../../images/calculator.svg';

export const TransactionsFormIncome = () => {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Salary');
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const onInputChange = event => {
    let { name, value } = event.currentTarget;
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setAmount(Number(value));
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const formData = {
      date,
      description,
      category: translateToRus(category),
      amount,
    };
    dispatch(addIncome(formData));
    reset();
  };

  const reset = () => {
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setDescription('');
    setCategory('Salary');
    setAmount(0);
  };

  const getDate = newDate => {
    setDate(format(newDate, 'yyyy-MM-dd'));
  };

  return (
    <form className={css.transactionsForm} onSubmit={onFormSubmit}>
      <div className={css.transactionsInputsWrap}>
        <div className={css.dateWrapper}>
          <SelectDataPicker getDate={getDate} />
        </div>
        <input
          type="text"
          name="description"
          className={css.transactionsDescription}
          value={description}
          onChange={onInputChange}
          placeholder="Product description"
          required
        />
        <select
          name="category"
          id="incomesCategory"
          className={css.transactionsCategory}
          value={category}
          onChange={onInputChange}
          required
        >
          <option value="Salary">Salary</option>
          <option value="Additional income">Additional income</option>
        </select>
        <div className={css.transactionsAmountWrapper}>
          <input
            type="number"
            name="amount"
            className={css.transactionsAmount}
            onChange={onInputChange}
            value={amount > 0 && amount}
            placeholder="00.00"
            required
          />
          <img src={calculator} alt='calculator' className={css.calculatorIcon}/>

          {/* Добавить свг калькулятор*/}
        </div>
      </div>
      <div className={css.transactionsButtonsWrap}>
        <button type="submit" className={css.transactionsInputBtn}>
          Input
        </button>
        <button type="reset" className={css.transactionsClearBtn}>
          Clear
        </button>
      </div>
    </form>
  );
};
