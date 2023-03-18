import { createSlice } from '@reduxjs/toolkit';
import { getAllUserInfo, logIn } from 'redux/auth/operation';
import {addIncome, getIncome, addExpense, getExpense,deleteTransaction, getIncomeCategories, getExpenseCategories,getTransactionsByDate, updateBalance } from 'redux/transactions/operation';

import { setAccessToken } from 'redux/auth/authSlice';

const initialState = {
  transactions: [],
  reportsData: [],
  incomes: [],
  incomeTotal: 0,
  incomesStats: {},
  expenses: [],
  expenseTotal: 0,
  expensesStats: {},
  incomeCategories: [],
  expenseCategories: [],
  balance: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;

  if (action.payload.code === 401) {
    console.log(action.payload);
    setAccessToken('');
  }
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addIncome.pending, handlePending)
      .addCase(addIncome.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
        state.incomes.push(action.payload.transaction);
        state.transactions.push(action.payload.transaction);
      })
      .addCase(addIncome.rejected, handleRejected)

      .addCase(getIncome.pending, handlePending)
      .addCase(getIncome.fulfilled, (state, action) => {
        state.incomes = action.payload.incomes;
        state.incomesStats = action.payload.monthsStats;
      })
      .addCase(getIncome.rejected, handleRejected)

      .addCase(addExpense.pending, handlePending)
      .addCase(addExpense.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
        state.expenses.push(action.payload.transaction);
        state.transactions.push(action.payload.transaction);
        // state.isLoading = false;
      })
      .addCase(addExpense.rejected, handleRejected)

      .addCase(getExpense.pending, handlePending)
      .addCase(getExpense.fulfilled, (state, action) => {
        state.expenses = action.payload.expenses;
        state.expensesStats = action.payload.monthsStats;
      })
      .addCase(getExpense.rejected, handleRejected)

      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
        let index = state.incomes.findIndex(
          transaction => transaction._id === action.meta.arg
        );
        if (index === -1) {
          index = state.expenses.findIndex(
            transaction => transaction._id === action.meta.arg
          );
          state.expenses.splice(index, 1);
        } else {
          state.incomes.splice(index, 1);
        }
      })
      .addCase(deleteTransaction.rejected, handleRejected)

      .addCase(getIncomeCategories.pending, handlePending)
      .addCase(
        getIncomeCategories.fulfilled,
        (state, action) => {
          state.incomeCategories = action.payload;
        }
      )
      .addCase(getIncomeCategories.rejected, handleRejected)

      .addCase(getExpenseCategories.pending, handlePending)
      .addCase(
        getExpenseCategories.fulfilled,
        (state, action) => {
          state.expenseCategories = action.payload;
        }
      )
      .addCase(getExpenseCategories.rejected, handleRejected)

      .addCase(getTransactionsByDate.pending, handlePending)
      .addCase(
        getTransactionsByDate.fulfilled,
        (state, action) => {
          state.reportsData = action.payload;
          state.incomes = action.payload.incomes;
          state.incomeTotal = action.payload.incomes.incomeTotal;
          state.expenses = action.payload.expenses;
          state.expenseTotal = action.payload.expenses.expenseTotal;
        }
      )
      .addCase(getTransactionsByDate.rejected, handleRejected)

      .addCase(getAllUserInfo.pending, handlePending)
      .addCase(getAllUserInfo.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
      })
      .addCase(getAllUserInfo.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.balance = action.payload.userData.balance;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(updateBalance.pending, handlePending)
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
      })
      .addCase(updateBalance.rejected, handleRejected);
  },
});

export default transactionsSlice.reducer;
