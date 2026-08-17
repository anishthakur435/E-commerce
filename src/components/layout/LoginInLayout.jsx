import React from "react";
import { Outlet } from "react-router-dom";
import LoginHeader from "./LoginHeader";

function LoginInLayout() {
  return (
    <>
      <div className="max-h-screen text-black">
        <LoginHeader />
        <Outlet />
      </div>
    </>
  );
}

export default LoginInLayout;
