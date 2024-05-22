import "./manageuser.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFullUser } from "../../redux/actions";
import { deleteUser } from "../../api";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "../../components/Register/register"
function ManageUser() {
    const [ref, setRef] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(ref);
        dispatch(getFullUser.getFullUserRequest('3'))
    }, [dispatch, ref])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleDeleteUserFromAdmin = (id) => {
        deleteUser(id)
        console.log(id);
        setRef(!ref)
        toast.success('Xóa Thành Công !', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
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

    const listPatient = useSelector(state => state.getfullUser.data);
    console.log("listPatient : ", listPatient);
    return (
        <>
            <div>
                <button style={{
                    padding : '10px 12px',
                    borderRadius : "15px",
                    marginTop : '10px',
                    cursor : 'pointer'
                
                }} onClick={openModal}>Thêm Người dùng</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                  <Register propNumber = "1" />
                </Modal>
            </div>
            <div className="manage_user">
              

                <div className="manage_patient">
                    <p className="text_head"> Quản Lý Bệnh Nhân </p>
                    <table>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Xóa</th>

                        </tr>
                        {listPatient && listPatient.length > 0 &&

                            listPatient.map((patinet, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img className="imgabcabcabcabc" style={{ height: '50px', width: "50px", borderRadius: "50px" }} src={patinet.avatar} alt="" /></td>

                                        <td>{patinet.name}</td>
                                        <td>{patinet.phonenumber}</td>
                                        <td><button onClick={() => handleDeleteUserFromAdmin(patinet._id)} className="button_delete_user"  > Xóa </button></td>


                                    </tr>
                                )

                            })

                        }


                    </table>
                </div>


            </div>
            <ToastContainer></ToastContainer>

        </>


    );
}

export default ManageUser;