import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import { getContact } from "../../redux/actions";
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { DeleteContact } from "../../api";
import "./contact.css"
function Contact() {

    const [ref, setRef] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {


        dispatch(getContact.getContactRequest());





    }, [dispatch, ref])

    const listContact = useSelector(state => state.getMyContact.Data);

    const handleDeleteContact = (id) => {
        console.log(id);
        DeleteContact(id)
        toast.success('Đã Hoàn Thành !', {

            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setRef(!ref)
    }






    return (

        <>
            <p className="danhsachnguoilienhe"> DANH SÁCH NGƯỜI LIÊN HỆ </p>
            <table>
                <tr>
                    <th>Họ Và Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Triệu Chứng</th>
                    <th>Hoàn Thành</th>

                </tr>
                {listContact && listContact.length > 0 &&
                    listContact.map((item, index) => {

                        return (
                            <tr key={index}>
                                <td>{item.fullname || 'Vô danh'}</td>
                                <td>{item.phone || '000000000'}</td>

                                <td>{item.text || 'Không có'}</td>
                                <td style={{ textAlign: 'center' }}><FontAwesomeIcon onClick={() => handleDeleteContact(item._id)} className="checktosuccess" icon={faCheck} /></td>




                            </tr>
                        )

                    })
                }


            </table>
            <div className="themnene">

                <div className="themne1 themne"></div>
                <div className="themne2 themne"></div>

            </div>
            <ToastContainer />
        </>

    );
}

export default Contact;