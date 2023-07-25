import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
