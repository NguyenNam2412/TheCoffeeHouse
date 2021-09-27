import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import authReducer from "./authReducer"
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  cartReducer,
  authReducer
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;