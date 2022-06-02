import axios from "axios";
import { toast } from "../components/shared/toast";

export const APIInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  timeout: 300000,
  withCredentials: true,
});

APIInstance.interceptors.request.use(
  (request) => {
    if (request.headers["content-type"] === "application/json")
      return { ...request, data: snakeizeKeys(request.data) };
    return request;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);

APIInstance.interceptors.response.use(
  (response) => {
    if (response.headers["content-type"] === "application/json")
      return camelizeKeys(response.data);
    return response.data;
  },
  (error) => {
    if (axios.isCancel(error)) return Promise.reject(error);
    try {
      if (error.response.status === 401)
        toast({ status: "error", content: "Please login again" });
    } catch (e) {
      toast({ status: "error", content: "Server did not respond" });
    }

    return Promise.reject(error.message);
  }
);

// API Endpoints

export const API = {
  auth: {
    login: async ({ params }) => APIInstance.get("/accounts/login", { params }),
    logout: async () => APIInstance.get("/accounts/logout"),
    authenticate: async () => APIInstance.get("/accounts/authenticate"),
  },
};
