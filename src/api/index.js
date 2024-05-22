import axios from "axios";


const URL = "http://localhost:8080";

export const loginUser = (payload) => axios.post(`${URL}/login`, payload)

export const getuserdetail = (payload) => axios.post(`${URL}/login/getuserdetail`, payload)

export const getuser = (payload) => axios.get(`${URL}/user/${payload}`)

export const deleteUser = (payload) => axios.delete(`${URL}/user/${payload}`)

export const registerUser = (payload) => axios.post(`${URL}/register`, payload)

export const createComment = (payload) => axios.post(`${URL}/comment`, payload)

export const getComments = (payload) => axios.get(`${URL}/comment`, payload)

export const getCommentByStar = (payload) => axios.get(`${URL}/comment/count/${payload}`)

export const createBook = (payload) => axios.post(`${URL}/book `, payload)

export const getBook = (payload) => axios.get(`${URL}/book/user/${payload} `)

export const deleteBook = (payload) => axios.delete(`${URL}/book/user/${payload} `)

export const getDetailClinic = (payload) => axios.get(`${URL}/clinic/${payload} `)

export const createContact = (payload) => axios.post(`${URL}/contact `, payload)

export const getFullContact = (payload) => axios.get(`${URL}/contact `, payload)

export const DeleteContact = (payload) => axios.delete(`${URL}/contact/${payload} `)

export const UpdateUser = (payload,id ) => axios.put(`${URL}/user/${id}`, payload)













