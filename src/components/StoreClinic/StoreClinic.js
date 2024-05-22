import "./StoreClinic.css"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getBook } from "../../redux/actions";
import { useSelector } from "react-redux";
import { getCookie } from "../../Cookies";
import { deleteBook } from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StoreClinic() {

    const [ref, setRef] = useState(false)

    const id = getCookie('id')


    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {

            dispatch(getBook.getBookRequest(id));
        }



    }, [dispatch, ref])

    const listBook = useSelector(state => state.getMyBook.Data);



    const handleClickRemoveBook = (data) => {
        deleteBook(data)
        setRef(!ref)
        toast.success('Xóa Lịch Khám Thành Công !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }




    return (

        <>
            <div className="header_storeclinic">
                <div className="header_storeclinic_text">
                    <p className="store_name text-dam"> Danh Sách Các Lịch Khám Trong Ngày </p>
                    <p className="store_number text-dam"> <span> Bạn có <span className="numberForBook"> {listBook.length} </span> lịch khám trong ngày</span> </p>
                </div>
                <div className="header_storeclinic_img"></div>
            </div>


            <div className="store_table">
                <table className="store_table_contents" >
                    <tr>
                        <th>Tên</th>
                        <th>Thời gian khám</th>
                        <th>Phòng Khám</th>

                        <th>SĐT Phòng Khám</th>
                        <th>Hủy Lịch</th>





                    </tr>
                    {listBook && listBook.length > 0 &&
                        listBook.map((book, index) => {
                            return (

                                <tr key={index}>
                                    <td> {book.iduser.name} </td>
                                    <td> {book.typeTime} </td>
                                    <td> {book.idClinic.name} </td>
                                    <td> {book.idClinic.phonenumber} </td>

                                    <td><button onClick={() => { handleClickRemoveBook(book._id) }} className="removeForBook"> Hủy </button> </td>




                                </tr>

                            )
                        })
                    }


                </table>
                <div className="store_table_img"> </div>

            </div>
            <div className="dovanngochuong">

                <div className="dovanngochuong_img"></div>

                <div className="noteforbook">

                    <p className="subtextname">AN TOÀN 5 BƯỚC- BẢO VỆ TỐI ĐA- AN TÂM THĂM KHÁM</p>

                    <span>✔ Bước 1: An toàn khi đến phòng khám</span> <br />

                    <span> ✔ Bước 2: An toàn khi tư vấn </span> <br />
                    <span>✔ Bước 3: An toàn khi chờ thăm khám</span> <br />
                    <span>✔ Bước 4: An toàn trong quá trình điều trị </span> <br />
                    <span>✔ Bước 5: An toàn sau điều trị </span> <br />



                </div>
                <ToastContainer></ToastContainer>
                  
            

            </div>


        </>

    );
}

export default StoreClinic;