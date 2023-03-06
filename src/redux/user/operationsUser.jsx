import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operationsAuth';
import { setToken } from '../auth/operationsAuth';

export const getUserBalance = createAsyncThunk(
  'user/balance',
  async (balance, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken.set(state.auth.accessToken);
    try {
      const { data } = await instance.patch('/user/balance', {
        newBalance: balance,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk('user', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  setToken.set(state.auth.accessToken);
  try {
    const res = await instance.get('/user');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
