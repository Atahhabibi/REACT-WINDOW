import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use((request) => {
  const user = getUserFromLocalStorage();
  try {
    if (user) {
      request.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return request;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default customFetch;
