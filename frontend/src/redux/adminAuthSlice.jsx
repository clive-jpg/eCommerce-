import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false || localStorage.getItem("Token") != null,
};

export const adminSlice = createSlice({
  name: "authAdmin",
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
export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;

export const adminsignupThunk =
  ({ name, email,phone_number, password }) =>
  async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND}/auth/signup`, {
      name,
      email,
      phone_number,
      password,
    });
  };

export const adminloginThunk =
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

export const adminlogoutThunk = () => async (dispatch) => {
  localStorage.removeItem("Token");
  dispatch(logout());
  console.log("Logout running");
};

