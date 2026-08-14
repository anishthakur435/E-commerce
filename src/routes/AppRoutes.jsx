import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// 1. Keep Layouts as standard imports so the app shell loads immediately
import MainLayout from "../components/layout/MainLayout";
import CheckoutLayout from "../components/layout/CheckoutLayout";
import LoginInLayout from "../components/layout/LoginInLayout";

// 2. Lazy load the page components so they are split into smaller, separate chunks
const HomePage = lazy(() => import("../pages/Home/Home"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const CheckOut = lazy(() => import("../pages/CheckOut/CheckOut"));
const ViewProduct = lazy(() => import("../pages/ViewProduct/ViewProduct"));
const Receipt = lazy(() => import("../pages/Receipt/Receipt"));
const SignIn = lazy(() => import("../pages/LogIn/SignIn"));
const SignUp = lazy(() => import("../pages/LogIn/SignUp"));

function AppRoutes() {
  return (
    // 3. Wrap Routes in Suspense to handle the loading state
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
          Loading...
        </div>
      }
    >
      <Routes>
        {/* main layout for the app */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/view" element={<ViewProduct />} />
        </Route>

        {/* layout for the Login forms */}
        <Route element={<LoginInLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* layout for the CheckOut form */}
        <Route element={<CheckoutLayout />}>
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/receipt" element={<Receipt />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
