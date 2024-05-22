
import "./ManageNurse.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFullUser } from "../../redux/actions";
import { getuser } from "../../api";

function ManageNurse() {
const [ nurse , setNurse ] = useState( {
    nurse : []
} )
  
    useEffect(() => {
        getuser('4')
        .then( data => {
            setNurse( {
                ...nurse,
                nurse : [ ...data.data.data ]
            } )
        } )
        .catch( err => console.log( err ) )
        
    }, [])
  
   

    return (
        <>

            <div className="manage_doctor">

                <div className="manage_patient">
                    <p className="text_head"> Quản Lý Y Tá </p>
                    <table>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Xóa</th>
                        </tr>
                        {nurse.nurse && nurse.nurse.length > 0 &&
                            nurse.nurse.map((patinet, index) => {
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

        </>
    );
}

export default ManageNurse;