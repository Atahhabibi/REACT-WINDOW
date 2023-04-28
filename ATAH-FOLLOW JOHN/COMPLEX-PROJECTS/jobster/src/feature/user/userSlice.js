import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch("/auth/updateUser", user, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.user = action.payload.user;
      addUserToLocalStorage(action.payload.user);
      toast.success(`Salam There ${action.payload.user.name}`);
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.user = action.payload.user;
      addUserToLocalStorage(action.payload.user);
      toast.success(`Welcome back ${action.payload.user.name}`);
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
