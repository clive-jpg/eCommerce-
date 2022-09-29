import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function RequireAuth(props) {
    // const navigate = useNavigate();
    const isAuthenticated = useSelector((state)=> state.authReducer.isAuthenticated)
  return isAuthenticated ? props.children : <Navigate to="/login"/>
}
