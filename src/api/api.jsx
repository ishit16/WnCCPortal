import axios from "axios";
import toast from "../components/shared/toast/toast";
import { snakeizeKeys } from "../helpers/transformKeys";
import { camelizeKeys } from "../helpers/transformKeys";

export const APIInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  timeout: 300000,
  withCredentials: true,
});

APIInstance.interceptors.request.use(
  (request) => {
    console.log(request);
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
    login: async ({ params }) => {
      console.log(params);
      APIInstance.get("api/authentication/login", { params });
    },
    logout: async () => APIInstance.get("api/authentication/logout"),
    authenticate: async () =>
      APIInstance.get("api/authentication/authenticate"),
    csrftoken: async () => APIInstance.get("api/authentication/csrftoken"),
  },
  profile: {
    read: async () => APIInstance.get("api/authentication/profile"),
    update: async ({ payload }) =>
      APIInstance.put("api/authentication/profile", payload),
    delete: async () => APIInstance.delete("api/authentication/profile"),
  },
};

export default API;
