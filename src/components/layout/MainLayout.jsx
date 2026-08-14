import React from "react";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="min-h-screen  text-black">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
