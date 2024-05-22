
import { combineReducers } from "redux";
import loginUser from "./loginUser";
import registerUser from "./registerUser";
import comment from "./comment";
import getUserSuccess from "./getUserSuccess";
import getfullUser from "./getFullUser";
import getFullComment from "./getFullComment";
import getMyBook from "./getbook";
import getErrCodeBook from "./getErrcodeForBook";
import getMyContact from "./getContact";

export const rootReducer = combineReducers({
    loginUser,
    registerUser,
    comment,
    getUserSuccess,
    getfullUser,
    getFullComment: getFullComment,
    getMyBook,
    getErrCodeBook,
    getMyContact

});