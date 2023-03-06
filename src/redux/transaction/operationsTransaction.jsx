import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'redux/auth/operationsAuth';

export const addIncome = createAsyncThunk(
  'transactions/addIncome',
  async (incomeData, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.post('/transaction/income', incomeData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncome = createAsyncThunk(
  'transactions/getIncome',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.get('/transaction/income');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  'transactions/addExpense',
  async (expenseData, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.post('/transaction/expense', expenseData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpense = createAsyncThunk(
  'transactions/getExpense',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.get('/transaction/expense');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.delete(`/transaction/${transactionId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncomeCategories = createAsyncThunk(
  'transaction/income-categories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.get('/transaction/income-categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  'transaction/expense-categories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.get('/transaction/expense-categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsByDate = createAsyncThunk(
  'transaction/period-data',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.get(
        '/transaction/period-data?date=' + date
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
