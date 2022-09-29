import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false || localStorage.getItem("Token") != null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const signupThunk =
  ({ name, email, password }) =>
  async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND}/auth/signup`, {
      name,
      email,
      password,
    });
  };

export const loginThunk =
  ({ email, password }) =>
  async (dispatch) => {
    console.log(email, password);
    let response = await axios.post(
      `${process.env.REACT_APP_BACKEND}/auth/login`,
      { email, password }
    );
    if (response.data) {
      console.log(response.data);
      localStorage.setItem("Token", response.data.token);
        // axios.defaults.headers.common["Authorization"] =
        //   "Bearer " + localStorage.getItem("Token");
      dispatch(login());
    }
  };

export const logoutThunk = () => async (dispatch) => {
  localStorage.removeItem("Token");
  dispatch(logout());
  console.log("Logout running");
};

//facebook
export const facebookLoginThunk = (userInfo) => async (dispatch) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/auth/facebook`,
    { userInfo }
  );
  localStorage.setItem("Token", response.data.token);
  dispatch(login());
};
