import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addExpense, addIncome } from 'redux/transactions/operation';
import SelectDataPicker from 'components/DatePicker/DatePicker';
import { format } from 'date-fns';
import { translateToRus } from 'hooks/useCategory';
import css from './TransactionsForm.module.css';

export const TransactionsForm = () => {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const location = useLocation();
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
    if (location.pathname === '/expenses') {
      dispatch(addExpense(formData));
    } else if (location.pathname === '/income') {
      dispatch(addIncome(formData));
    }
    reset();
  };

  const reset = () => {
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setDescription('');
    setCategory('');
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
        {location.pathname === '/income' && (
          <select
            name="category"
            id="incomesCategory"
            onChange={onInputChange}
            className={css.transactionsCategory}
            required
          >
            <option value="Salary">Salary</option>
            <option value="Additional income">Additional income</option>
          </select>
        )}
        {location.pathname === '/expenses' && (
          <select
            name="category"
            id="expencesCategory"
            className={css.transactionsCategory}
            onChange={onInputChange}
            required
          >
            <option value="Transport">Transport</option>
            <option value="Products">Products</option>
            <option value="Health">Health</option>
            <option value="Alcohol">Alcohol</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Housing">Housing</option>
            <option value="Technique">Technique</option>
            <option value="Communal, communication">
              Communal, communication
            </option>
            <option value="Sports, hobbies">Sports, hobbies</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        )}
        <div className={css.transactionsAmountWrapper}>
          <input
            type="number"
            name="amount"
            className={css.transactionsAmount}
            onChange={onInputChange}
            placeholder="00.00"
            required
          />
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
