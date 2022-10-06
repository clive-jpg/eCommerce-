import React, { useState, useEffect } from "react";
import LogoutButton from "../Components/button/LogoutButton"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutThunk } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  let dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated, navigate])

 

  return (
    <div><h1>This is Home Page</h1>
   <button onClick={()=> dispatch(logoutThunk())}>Logout</button>
   <LogoutButton/>
  
   </div>
  )
}
