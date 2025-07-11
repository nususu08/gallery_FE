import axios from "./httpRequester";

export const addOrder = (args) => {
  return axios.post("/order", args).catch((e) => e.response);
};

export const getOrders = () => {
  return axios.get("/order").catch((e) => e.response);
};

export const getOrder = (orderId) => {
  return axios.get(`/order/${orderId}`).catch((e) => e.response);
};
