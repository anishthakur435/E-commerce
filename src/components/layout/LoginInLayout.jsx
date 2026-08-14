import React from "react";
import { Outlet, Link } from "react-router-dom";

function LoginInLayout() {
  return (
    <>
      <div className="min-h-screen  text-black">
        <Outlet />
      </div>
    </>
  );
}

export default LoginInLayout;
