import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addExpense } from 'redux/transactions/operation';
import SelectDataPicker from 'components/DatePicker/DatePicker';
import css from './TransactionsForm.module.css';
import { format } from 'date-fns';

export const TransactionsForm = () => {
  const [formData, setFormData] = useState({});
  // const dispatch = useDispatch();
  const newDate = format(new Date(2014, 1, 11), 'yyyy-MM-dd');

  const onInputChange = event => {
    let { name, value } = event.currentTarget;
    if (name === 'amount') {
      value = Number(value);
    }
    setFormData(prevState => ({
      ...prevState,
      category: 'transport',
      date: newDate,
      [name]: value,
    }));
  };

  const onFormSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // dispatch(addExpense(formData)); ошибка при попытке отправить данные на бекенд
  };

  const getDate = newDate => {
    setFormData({
      date: newDate,
    });
  };

  return (
    <form className={css.transactionsForm} onSubmit={onFormSubmit}>
      <SelectDataPicker getDate={getDate} />
      <input
        type="text"
        name="description"
        className={css.transactionsInputProduct}
        onChange={onInputChange}
        required
      />
      <select
        name="category"
        id="category"
        className={css.transactionsProductType}
        onChange={onInputChange}
        required
      >
        <option value="transport">Transport</option>
        <option value="products">Products</option>
        <option value="health">Health</option>
        <option value="alcohol">Alcohol</option>
        <option value="entertainment">Entertainment</option>
        <option value="housing">Housing</option>
        <option value="technique">Technique</option>
        <option value="communal/communication">Communal, communication</option>
        <option value="sports/hobbies">Sports, hobbies</option>
        <option value="education">Education</option>
        <option value="other">Other</option>
      </select>
      <input
        type="number"
        name="amount"
        className={css.transactionsInputAmount}
        onChange={onInputChange}
        required
      />
      <button type="submit" className={css.transactionsSubmitBtn}>
        Input
      </button>
      <button type="reset" className={css.transactionsResetBtn}>
        Clear
      </button>
    </form>
  );
};
