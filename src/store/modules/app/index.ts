import { createSlice } from "@reduxjs/toolkit";
import initialState from "./init-state";
import reducers from "./reducer";

const AppSlice = createSlice({
  name: "module",
  initialState,
  reducers,
});

export default AppSlice;
