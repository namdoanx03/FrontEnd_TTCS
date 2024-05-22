import "./ManageDoctor.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFullUser } from "../../redux/actions";
import ManageNurse from "../ManageNurse/ManageNurse";

function ManageDoctor() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFullUser.getFullUserRequest('2'))
    }, [dispatch])
    const listDoctor = useSelector(state => state.getfullUser.data);
    console.log("listPatient : ", listDoctor);

    return (
        <>
            <div className="manage_doctor">

                <div className="manage_patient">
                    <p className="text_head"> Quản Lý Bác Sĩ </p>
                    <table>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Xóa</th>
                        </tr>
                        {listDoctor && listDoctor.length > 0 &&
                            listDoctor.map((patinet, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img className="imgabcabcabcabc" style={{ height: '50px', width: "50px", borderRadius: "50px" }} src={patinet.avatar} alt="" /></td>

                                        <td>{patinet.name}</td>
                                        <td>{patinet.phonenumber}</td>
                                        <td><button className="button_delete_user"  > Xóa </button></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>


            </div>
            <ManageNurse/>
        </>
    );
}

export default ManageDoctor;