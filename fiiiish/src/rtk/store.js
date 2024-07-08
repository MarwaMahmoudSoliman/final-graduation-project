import { configureStore } from "@reduxjs/toolkit";

import coursesSlice from '../rtk/coursesSlice';

import blogsSlice from '../rtk/blogsSlice';
export default configureStore({
  reducer: {
    courses:coursesSlice ,
    blogs:blogsSlice,
  },
});