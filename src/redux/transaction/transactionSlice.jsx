import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from 'redux/user/operationsUser';
import { login } from 'redux/auth/operationsAuth';
import {
  addIncome,
  getIncome,
  addExpense,
  getExpense,
  deleteTransaction,
  getIncomeCategories,
  getExpenseCategories,
  getTransactionsByDate,
} from 'redux/transaction/operationsTransaction';

import { setAccessToken } from 'services/authSlice';

const initialState = {};
