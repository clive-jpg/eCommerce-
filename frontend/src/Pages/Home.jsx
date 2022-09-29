import React from 'react'
import LogoutButton from "../Components/LogoutButton"
import { useSelector } from "react-redux";
import { logoutThunk } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  let dispatch = useDispatch();
  return (
    <div><h1>This is Home Page</h1>
   <button onClick={()=> dispatch(logoutThunk())}>Logout</button>
   <LogoutButton/>
  
   </div>
  )
}
