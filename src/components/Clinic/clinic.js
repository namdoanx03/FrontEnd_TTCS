import "./clinic.css"
import { useEffect, useState, useCallback } from "react"
import { getDetailClinic } from "../../api";
import { getCookie } from "../../Cookies";
import { getBook } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { deleteBook } from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Clinic() {
    const [ref, setRef] = useState(false)
    const [dataClinic, setDataClinic] = useState({
        nameClinic: "",
        idClinic: "",
        doctor: {}

    })
    let ID = getCookie('id')
    let role = getCookie('role')


    useEffect(() => {
        if (role && role === '2') {
            getDetailClinic(ID)
                .then(function (response) {
                    const clinic = response.data.data;
                    setDataClinic({
                        ...dataClinic,
                        nameClinic: clinic.name,
                        idClinic: clinic._id,
                        doctor: {
                            ...clinic.idDoctor
                        }

                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [ID])



    const dispatch = useDispatch();

    useEffect(() => {
        if (dataClinic.idClinic && role === '2') {

            dispatch(getBook.getBookRequest(dataClinic.idClinic));
        }
        if (role && role === '1') {
            dispatch(getBook.getBookRequest('all'));
        }



    }, [dispatch, dataClinic.idClinic, ref, role])

    let listBook = useSelector(state => state.getMyBook.Data);

    console.log('list : ', listBook);
  
    const handleClickSuccess = (id) => {
        deleteBook(id)
        setRef(!ref)
        toast.success('Đã Hoàn Thành !', {
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
    return (<>


        {role && role === '2' &&
            <>
                <div className="name_phongkham"> {`PHÒNG KHÁM ${dataClinic.nameClinic.toUpperCase()}`} </div>
                <div className="content_phongkham">

                    <div className="doctor_phongkham">

                        <div className="user_detail_body">

                            <table>
                                <tr className="tr_table">
                                    <td>Avatar</td>
                                    <td> <img width="150px" height="150px" src={dataClinic && dataClinic.doctor.avatar} alt="" />  </td>

                                </tr>
                                <tr>
                                    <td>Tên</td>
                                    <td>{dataClinic && dataClinic.doctor.name}</td>

                                </tr>
                                <tr>
                                    <td>Tuổi</td>
                                    <td>{dataClinic && dataClinic.doctor.age}</td>

                                </tr>


                                <tr>
                                    <td>Số Điện Thoại</td>
                                    <td>{dataClinic && dataClinic.doctor.phonenumber}</td>

                                </tr>

                            </table>

                        </div>


                    </div>
                    <div className="coso_phongkham">

                        <div className="avatar_cosophongkham"></div>



                    </div>


                </div>

            </>
        }
      

        <p className="themmotdoanchat"> DANH SÁCH KHÁM TRONG NGÀY TẠI PHÒNG KHÁM </p>
        <div className="listBookforclinic" >

            <table>
                <tr>
                    <th>Họ Tên</th>
                    <th>Thời Gian</th>
                    <th>Phòng Khám</th>
                    <th>Số Điện Thoại</th>
                    <th>Hoàn Thành</th>


                </tr>

                {listBook && listBook.length > 0 &&

                    listBook.map((book, index) => {

                        return (

                            

                                <tr key={index}>
                                    <td> {book.iduser ? book.iduser.name : 'User( Đã bị buộc xóa )'}</td>
                                    <td>{book.typeTime}</td>

                                    <td>{book.idClinic.name}</td>

                                    <td>{book.iduser ? book.iduser.phonenumber : '000000000'}</td>
                                    <td onClick={() => handleClickSuccess(book._id)} className="checktosuccess"> < FontAwesomeIcon icon={faCheck} /> </td>
                                </tr>

                            

                        )

                    })

                }



            </table>


        </div>
        {role && role === '1' && <div className="slider_themthui">


<div className="themnene">
    <div className="themne1 themne"></div>
    <div className="themne2 themne"></div>

</div>



        </div>}
        <ToastContainer></ToastContainer>


    </>);
}

export default Clinic;