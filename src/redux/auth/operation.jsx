import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', user);
      // const res = await axios.post('/auth/login', user);
      return { ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', user);
    token.set(data.accessToken);
    toast('Successfully logged in!');
    return data;
  } catch (error) {
    toast('Data entered incorrectly. Try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  token.set(state.auth.accessToken);
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getAllUserInfo = createAsyncThunk('user', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  token.set(state.auth.accessToken);
  try {
    const { data } = await axios.get('/user');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshToken = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    let sid = state.auth.sid;
    if (!sid) {
      console.log(sid);
      return thunkAPI.rejectWithValue();
    }
    const update = state.auth.refreshToken;
    token.set(update);
    try {
      const { data } = await axios.post('/auth/refresh', {
        sid,
      });
      token.set(data.newAccessToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
