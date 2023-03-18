import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  getAllUserInfo,
  refreshToken,
} from 'redux/auth/operation';

const initialState = {
  accessToken: '',
  refreshToken: '',
  sid: '',
  userId: null,
  userEmail: '',
  isLoggedIn: false,
  transactions: [],
  isFetchingCurrentUser: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;

  if (action.payload.code === 401) {
    state.accessToken = '';
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.userId = action.payload.id;
        // state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        // state.sid = action.payload.sid;
        // state.userEmail = action.payload.userData.email;
        // state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.userEmail = action.payload.userData.email;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state, action) => {
        state.userId = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshToken.pending, (state, action) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
      })

      .addCase(getAllUserInfo.pending, handlePending)
      .addCase(getAllUserInfo.fulfilled, (state, action) => {
        state.transactions = action.payload.transactions;
        state.userEmail = action.payload.email;
        state.isLoggedIn = true;
      })
      .addCase(getAllUserInfo.rejected, handleRejected);
  },
});

export default authSlice.reducer;
export const { setAccessToken } = authSlice.actions;
