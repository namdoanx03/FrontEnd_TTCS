import { createActions } from "redux-actions";

export const getUser = createActions({
    getUserRequest: (payload) => payload,
    getUserSuccess: (payload) => payload,
    getUserFail: (err) => err,
})

export const createUser = createActions({
    createUserRequest: (payload) => payload,
    createUserSuccess: (payload) => payload,
    createUserFail: (err) => err,
})

export const createComment = createActions({
    createCommentRequest: (payload) => payload,
    createCommentSuccess: (payload) => payload,
    createCommentFail: (err) => err,
})

export const getUserAction = createActions({
    getUserActionRequest: (payload) => payload,
    getUserActionSuccess: (payload) => payload,
    getUserActionFail: (err) => err,
})


export const getFullUser = createActions({
    getFullUserRequest: (payload) => payload,
    getFullUserSuccess: (payload) => payload,
    getFullUserFail: (err) => err,
})


export const getFullComment = createActions({
    getFullCommentRequest: (payload) => payload,
    getFullCommentSuccess: (payload) => payload,
    getFullCommentFail: (err) => err,
})


export const createBook = createActions({
    createBookRequest: (payload) => payload,
    createBookSuccess: (payload) => payload,
    createBookFail: (err) => err,
})

export const getBook = createActions({
    getBookRequest: (payload) => payload,
    getBookSuccess: (payload) => payload,
    getBookFail: (err) => err,
})

export const getContact = createActions({
    getContactRequest: (payload) => payload,
    getContactSuccess: (payload) => payload,
    getContactFail: (err) => err,
})



