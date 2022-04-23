import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { studentListReducers } from "../Redux/Reducers/studentsReducers";
import { userLoginReducers } from "../Redux/Reducers/userReducer";

// Reducers list
const reducer = combineReducers({
  studentReducers: studentListReducers,
  userLogin: userLoginReducers,
});

// SystemStorage
const userInfoStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

// Initial state
const initialState = { userLogin: { userInfo: userInfoStorage } };

// Middleware
const middleware = [thunk];

// Store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
