import { createSlice } from '@reduxjs/toolkit';
// import { getUserInfo } from 'redux/user/operationsUser';
// import { login } from 'redux/auth/operationsAuth';
import {
  addIncome,
  getIncome,
  addExpense,
  getExpense,
  // deleteTransaction,
  // getIncomeCategories,
  // getExpenseCategories,
  // getTransactionsByDate,
} from 'redux/transaction/operationsTransaction';

// import { setAccessToken } from 'services/authSlice';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    incomes: {
      items: [], // об'єкти типу: {"description": "Income description", "amount": 100, "date": "2020-12-31", "category": "Доход", "_id": "507f1f77bcf86cd799439011" }
      monthStats: [], // об'єкт типу: {"Январь": 5, "Февраль": 100, "Март": "N/A", ... , "Декабрь": 123 }
      isLoading: false,
      error: null,
    },
    expenses: {
      items: [],
      monthStats: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getIncome.fulfilled, (state, action) => {
        state.incomes.items = action.payload.incomes;
        state.incomes.monthStats = action.payload.monthStats;
        state.incomes.isLoading = false;
        state.incomes.error = null;
      })
      .addCase(getIncome.rejected, (state, action) => {
        state.incomes.isLoading = false;
        state.incomes.error = action.payload;
      })
      .addCase(getIncome.pending, (state, action) => {
        state.incomes.isLoading = true;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.incomes.items = [...state.incomes.items, action.payload.incomes];
        state.incomes.isLoading = false;
        state.incomes.error = null;
      })
      .addCase(addIncome.rejected, (state, action) => {
        state.incomes.isLoading = false;
        state.incomes.error = action.payload;
      })
      .addCase(addIncome.pending, (state, action) => {
        state.incomes.isLoading = true;
      })
      .addCase(getExpense.fulfilled, (state, action) => {
        state.expenses.items = action.payload.expense;
        state.expenses.monthStats = action.payload.monthStats;
        state.expenses.isLoading = false;
        state.expenses.error = null;
      })
      .addCase(getExpense.rejected, (state, action) => {
        state.expenses.isLoading = false;
        state.expenses.error = action.payload;
      })
      .addCase(getExpense.pending, (state, action) => {
        state.expenses.isLoading = true;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.items = [...state.expenses.items, action.payload];
        state.expenses.isLoading = false;
        state.expenses.error = null;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.expenses.isLoading = false;
        state.expenses.error = action.payload;
      })
      .addCase(addExpense.pending, (state, action) => {
        state.expenses.isLoading = true;
      }),
  //   .addCase(deleteTransaction.fulfilled, (state, action) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       el => el.id !== action.payload
  //     );
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //   })
  //   .addCase(deleteTransaction.rejected, (state, action) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //     console.log(action.payload);
  //   })
  //   .addCase(deleteTransaction.pending, (state, action) => {
  //     state.contacts.isLoading = true;
  //   }),
  //   .addCase(getExpenseCategories.fulfilled, (state, action) => {
  //     state.expenses.items = [...state.expenses.items, action.payload];
  //     state.expenses.isLoading = false;
  //     state.expenses.error = null;
  //   })
  //   .addCase(getExpenseCategories.rejected, (state, action) => {
  //     state.expenses.isLoading = false;
  //     state.expenses.error = action.payload;
  //   })
  //   .addCase(getExpenseCategories.pending, (state, action) => {
  //     state.expenses.isLoading = true;
  //   }),
});

export default transactionsSlice.reducer;
