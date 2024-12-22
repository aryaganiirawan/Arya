// store/reducer/loginReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const initialState: LoginState = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Partial<LoginState>>) => {
      // Update hanya field yang diberikan
      return { ...state, ...action.payload };
    },
    resetData: () => initialState, // Reset ke initial state
  },
});

export const { setData, resetData } = loginSlice.actions;
export default loginSlice.reducer;
