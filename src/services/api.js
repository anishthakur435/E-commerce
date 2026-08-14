import axios from "axios";

const AxiosApi = axios.create({
  baseURL: import.meta.env.VITE_MY_API_KEY_PRODUCTS,
});

// 
AxiosApi.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//
AxiosApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error?.response?.data || error.message);
  },
);

export default AxiosApi;
