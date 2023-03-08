import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addExpense } from 'redux/transactions/operation';
import SelectDataPicker from 'components/DatePicker/DatePicker';
import css from './TransactionsForm.module.css';

export const TransactionsForm = () => {
  const [formData, setFormData] = useState({});
  // const dispatch = useDispatch();

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      category: 'transport',
      [name]: value,
    }));
  };

  const onFormSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // dispatch(addExpense(formData)); ошибка при попытке отправить данные на бекенд
  };

  return (
    <form className={css.transactionsForm} onSubmit={onFormSubmit}>
      <SelectDataPicker />
      {/* добавить пропс, который вернет name='date' и value=дата */}
      <input
        type="text"
        name="description"
        className={css.transactionsInputProduct}
        onChange={onInputChange}
      />
      <select
        name="category"
        id="category"
        className={css.transactionsProductType}
        onChange={onInputChange}
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
