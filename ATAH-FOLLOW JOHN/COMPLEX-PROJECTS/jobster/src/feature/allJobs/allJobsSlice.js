import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { logoutUser } from "../user/userSlice";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"]
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState
};

export const getAllJobs = createAsyncThunk(
  "alljobs/getJobs",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/jobs", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`
        }
      });
      return resp.data;
    } catch (error) {
      if (error.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized logging out");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },

    hideLoading: (state) => {
      state.isLoading = false;
    }
  },

  extraReducers: (bundler) => {
    bundler.addCase(getAllJobs.pending, (state) => {
      state.isLoading = true;
    });
    bundler.addCase(getAllJobs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.totalJobs = payload.totalJobs;
      state.numOfPages = payload.numOfPages;
    });
    bundler.addCase(getAllJobs.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  }
});

export const { hideLoading, showLoading } = allJobsSlice.actions;

export default allJobsSlice.reducer;
