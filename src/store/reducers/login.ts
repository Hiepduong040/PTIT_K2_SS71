import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
}

const initialUser: User = {
  id: 1,
  userName: "Dương Sỹ Hiệp",
  email: "hiepduong0409@gmail.com",
  password: "hiep2005",
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState: {
    user: initialUser,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === state.user.email && password === state.user.password) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = loginReducer.actions;
export default loginReducer.reducer;