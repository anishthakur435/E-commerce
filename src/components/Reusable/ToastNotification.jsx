import { toast } from "react-toastify";

const defaultOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export const Toaster = (type = "success", message, options = {}) => {
  const toastMethod = toast[type] || toast.success;
  const mergedOptions = { ...defaultOptions, ...options };

  toastMethod(message, mergedOptions);
};
