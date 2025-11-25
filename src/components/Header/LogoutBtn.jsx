import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="inline-block bg-blue-500    hover:bg-blue-400 text-white px-4 py-1 rounded-lg"
    onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
