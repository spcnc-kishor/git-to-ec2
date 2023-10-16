import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function ProtectedRoute({ children }) {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  if (!userInfo) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
