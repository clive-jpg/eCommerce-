import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { logoutThunk } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="secondary" onClick={() => dispatch(logoutThunk()).then(()=> navigate("/login"))}>
        Logout
      </Button>
    </div>
  );
}
