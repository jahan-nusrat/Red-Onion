import axios from "axios";
import { store } from "../redux/store";

const local = "http://127.0.0.1:3333";

const remote = "https://www.belopao.com";


const api = axios.create({
  baseURL: remote,
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default api;
