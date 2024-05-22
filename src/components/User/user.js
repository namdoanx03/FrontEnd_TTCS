import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteAllCookies } from "../../Cookies";
import { NavLink } from "react-router-dom";
import React from 'react';


import 'react-toastify/dist/ReactToastify.css';

import { getCookie } from "../../Cookies";
import Modal from 'react-modal';
import "./user.css";
import { UpdateUser } from "../../api";
function User() {

    const id = getCookie('id')
    const [ref, setRef] = useState(false)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#98f4df'
        },
    };

    let subtitle;

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleClick = () => {
        deleteAllCookies()
    }
    const userDetail = useSelector(state => state.getUserSuccess.data);

    const [update, setUpdate] = useState({
        name: '',
        age: '',
        phonenumber: '',
        username: ''
    })

    console.log('userDetail la : ', userDetail);

    const [data, setData] = useState({
        ...userDetail.dataUser
    })

    const handleClickUpdate = async () => {
        await UpdateUser(update, id)
        setUpdate({

            name: '',
            age: '',
            phonenumber: '',
            username: ''

        })
        // setRef(!ref)
        closeModal()
        window.location = '/userdetail'

    }


    useEffect(() => {

        setData({
            ...userDetail.dataUser
        })

    }, [userDetail, ref])




    return (<>

        <div className="user_detail">
            <div className="user_detail_body">

                <table>
                    <tr className="tr_table">
                        <td>Avatar</td>
                        <td> <img width="150px" height="150px" src={data.avatar} alt="" />  </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{data.age}</td>
                    </tr>
                    <tr>
                        <td>UserName</td>
                        <td>{data.username}</td>
                    </tr>
                    <tr>
                        <td>PhoneNumber</td>
                        <td>{data.phonenumber}</td>
                    </tr>
                </table>
            </div>

            <div className="img_right_user">

            </div>


        </div>
        <NavLink to="/login" className="ngocdeptraivch" onClick={handleClick} style={{ cursor: 'pointer' }}> ĐĂNG XUẤT </NavLink>
        <>
            <div>
                <button className="btn_capnhat" onClick={openModal}> CẬP NHẬT </button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2> SỬA ĐỔI THÔNG TIN </h2>

                    <form action=" " className="inputUpdate">
                        <input value={update.name} className="inputUpdate_item" placeholder="Tên..." onChange={(e) => { setUpdate({ ...update, name: e.target.value }) }} required />
                        <input value={update.age} className="inputUpdate_item" placeholder="Tuổi..." onChange={(e) => { setUpdate({ ...update, age: e.target.value }) }} />
                        <input value={update.username} className="inputUpdate_item" placeholder="Tên Đăng Nhập..." onChange={(e) => { setUpdate({ ...update, username: e.target.value }) }} />
                        <input value={update.phonenumber} className="inputUpdate_item" placeholder="Số Điện Thoại..." onChange={(e) => { setUpdate({ ...update, phonenumber: e.target.value }) }} />
                        {/* <button > GỬI </button> */}
                        <input onClick={handleClickUpdate} className="btn_gui_nhe" type="submit"/>
                    </form>


                </Modal>
            </div>

        </>

    </>);
}

export default User;