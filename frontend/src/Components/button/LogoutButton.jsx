import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { logoutThunk } from "../../redux/authSlice";

export default function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button variant="secondary" onClick={() => dispatch(logoutThunk())}>
        Logout
      </Button>
    </div>
  );
}
