import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";

const RootReducer = combineReducers({
    Article: ArticleReducer
});

export default RootReducer;