import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";
import CustomProvider from "./routes/CustomProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <ToastContainer />
    <BrowserRouter>
      <CustomProvider>
        <App />
      </CustomProvider>
    </BrowserRouter>
  </StrictMode>,
);
