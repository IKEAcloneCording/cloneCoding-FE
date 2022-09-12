import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import SigninReducer from "../modules/SignInSlice";
import HeaderReducer from "../modules/HeaderSlice";

const middlewares = [thunk];
// 리듀서 통합
const rootReducer = combineReducers({
  login : SigninReducer,
  header : HeaderReducer,
});
// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
