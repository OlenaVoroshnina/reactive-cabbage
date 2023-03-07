// import { addExpense } from 'redux/transactions/operation';
import css from './TransactionsForm.module.css';

export const TransactionsForm = () => {
  const onFormSubmit = event => {
    event.preventDefault();
    const inputs = Object.values(event.currentTarget).filter(
      el => el.nodeName === 'INPUT' || el.nodeName === 'SELECT'
    );
    let formData = {}; // объект с данными из инпутов собирается правильно
    inputs.map(el => (formData = { ...formData, [el.name]: el.value }));
    // addExpense(formData); ошибка при попытке отправить данные на бекенд
  };

  return (
    <form className={css.transactionsForm} onSubmit={onFormSubmit}>
      <input type="date" name="date" className={css.transactionsInputDate} />
      {/* Заменить календарь на компонент Леси */}
      <input
        type="text"
        name="description"
        className={css.transactionsInputProduct}
      />
      <select
        name="category"
        id="category"
        className={css.transactionsProductType}
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
