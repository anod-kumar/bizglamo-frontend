// 






import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  BlogReducer,
  newDataReducer
} from "./reducers/dataReducers";




const reducer = combineReducers({
  Blogs: BlogReducer,
  newDataDetails: newDataReducer
});



const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;