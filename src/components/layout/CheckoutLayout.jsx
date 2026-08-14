import React from "react";
import { Typography } from "@mui/material";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/react";

function CheckoutLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F7F6F2]">
        <p className="text-sm uppercase tracking-widest">
          Checking authentication...
        </p>
      </main>
    );
  }

  if (!isSignedIn) {
    return (
      <Navigate
        to="/signin"
        state={{
          from: `${location.pathname}${location.search}`,
          buyNowItem: location.state?.buyNowItem,
        }}
        replace
      />
    );
  }

  return (
    <>
      <header>
        <div className="flex justify-between items-center py-6 px-8 border-b border-gray-200">
          <Typography
            variant="subtitle1"
            className="tracking-widest uppercase font-medium"
          >
            Secure Checkout
          </Typography>

          <Typography
            component={Link}
            to="/"
            className="text-sm underline text-gray-800 hover:text-gray-500 transition-colors"
          >
            Continue Browsing
          </Typography>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default CheckoutLayout;
