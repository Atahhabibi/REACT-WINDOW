import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};



export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk("/auth/updateUser", user, thunkAPI);
  }
);





const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state,{payload}) => {
      state.user = null;
      state.isLoading = false;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      toast.success(payload)
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
      state.isLoading = false;
      state.user = action.payload.user;
      addUserToLocalStorage(action.payload.user);
      toast.success(`Welcome back ${action.payload.user.name}`);
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });

    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const { user } = payload;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success("User Updated!");
    });

    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
