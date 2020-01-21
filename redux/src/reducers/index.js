import { combineReducers } from "redux";
import polls from "./polls";
import users from "./users";
import loading from "./loading";
import currentUser from "./currentUser";

export default combineReducers({ polls, users, loading, currentUser });
