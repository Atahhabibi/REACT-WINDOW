import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import { clearStore } from "../feature/user/userSlice";

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

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore("Unauthorized! Logging Out..."));
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }

  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
