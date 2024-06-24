
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import randomReducer from "./reducers/randomReducer";
import themeReducer from "./reducers/themeReducer";
import modeReducer from "./reducers/modeReducer";
import  isCheckShow  from "./reducers/menuShow";
import toogleLanguage from "./reducers/languageSlice"
import  showListUser  from "./reducers/listUser";
import login from "./reducers/login";
export const store = configureStore({
  reducer: {
    count: countReducer,
    random: randomReducer,
    theme: themeReducer,
    mode:modeReducer,
    isCheckShow: isCheckShow,
    toogleLanguage:toogleLanguage,
    showListUser: showListUser,
    login: login,
  },
});

