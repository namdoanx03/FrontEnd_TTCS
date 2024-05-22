import { takeLatest, call, put } from "redux-saga/effects"
import * as actions from "../actions";
import * as api from "../../api";
import { setCookie } from "../../Cookies";

function* fetchUserSaga(action) {
    try {

        const user = yield call(api.loginUser, action.payload);
        console.log('user : ', user);
        setCookie('avatar', user.data.detailUser.avatar, 1)
        setCookie('token', user.data.token, 1)
        setCookie('name', user.data.detailUser.name, 1)
        setCookie('role', user.data.detailUser.role, 1)
        setCookie('id', user.data.detailUser._id, 1)

        yield put(actions.getUser.getUserSuccess(user.data))
        window.location = "/"
    } catch (err) {

        console.log(err);

        yield put(actions.getUser.getUserFail(err))
    }
}

function* createUserSaga(action) {
    try {

        const data = yield call(api.registerUser, action.payload);

        yield put(actions.createUser.createUserSuccess(data))

    } catch (err) {
        console.log(err);
        yield put(actions.createUser.createUserFail(err))
    }
}

function* createCommentSaga(action) {
    try {
        const data = yield call(api.createComment, action.payload);
        yield put(actions.createComment.createCommentSuccess(data.data.commentDetail))

    } catch (err) {
        console.log(err);
        yield put(actions.createComment.createCommentFail(err))
    }
}

function* getUserActionSaga(action) {
    try {

        const data = yield call(api.getuserdetail, action.payload);

        yield put(actions.getUserAction.getUserActionSuccess(data.data))

    } catch (err) {
        console.log(err);
        yield put(actions.getUserAction.getUserActionFail(err))
    }
}

function* getFullUserActionSaga(action) {
    try {

        const data = yield call(api.getuser, action.payload);

        yield put(actions.getFullUser.getFullUserSuccess(data.data.data))

    } catch (err) {
        console.log(err);
        yield put(actions.getFullUser.getFullUserFail(err))
    }
}

function* getFullCommentActionSaga(action) {
    try {
        const data = yield call(api.getComments);
        // console.log('data comment : ', data.data.data);

        yield put(actions.getFullComment.getFullCommentSuccess(data.data.data))

    } catch (err) {
        console.log(err);
        yield put(actions.getFullComment.getFullCommentFail(err))
    }
}

function* createBookActionSaga(action) {
    try {
        let data = yield call(api.createBook, action.payload);


        yield put(actions.createBook.createBookSuccess(data.data.errcode))

    } catch (err) {
        console.log(err);
        yield put(actions.createBook.createBookFail(err))
    }
}

function* getBookActionSaga(action) {
    try {
        const datagetbook = yield call(api.getBook, action.payload);

        yield put(actions.getBook.getBookSuccess(datagetbook.data.data))

    } catch (err) {
        console.log(err);
        yield put(actions.getBook.getBookFail(err))
    }
}
function* getContactActionSaga(action) {
    try {
        const datacontact = yield call(api.getFullContact, action.payload);
        console.log('datacontact :', datacontact);

        yield put(actions.getContact.getContactSuccess(datacontact.data.data))

    } catch (err) {
        console.log(err);
        yield put(actions.getContact.getContactFail(err))
    }
}

function* mySaga() {
    yield takeLatest(actions.getUser.getUserRequest, fetchUserSaga)
    yield takeLatest(actions.createUser.createUserRequest, createUserSaga)
    yield takeLatest(actions.createComment.createCommentRequest, createCommentSaga)
    yield takeLatest(actions.getUserAction.getUserActionRequest, getUserActionSaga)
    yield takeLatest(actions.getFullUser.getFullUserRequest, getFullUserActionSaga)
    yield takeLatest(actions.getFullComment.getFullCommentRequest, getFullCommentActionSaga)
    yield takeLatest(actions.createBook.createBookRequest, createBookActionSaga)
    yield takeLatest(actions.getBook.getBookRequest, getBookActionSaga)
    yield takeLatest(actions.getContact.getContactRequest, getContactActionSaga)

}

export default mySaga