
import { NavLink } from "react-router-dom";
import "./header.css";
import React, { useState } from "react";
import { getCookie } from "../../Cookies";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faComment, faHome, faStore, faUser, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../redux/actions";







function Header() {


    const handleClickOpenUser = () => {
        document.getElementById("wrapper").classList.add("display_block")
    }
    window.onclick = function (event) {

        if (event.target.classList[0] !== 'wrapper' && event.target.classList[0] !== 'avatar_user') {
            document.getElementById("wrapper").classList.remove("display_block")
        }

    }
    let isLogin = false;
    const token = getCookie('token');
    let role = getCookie('role');
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            dispatch(getUserAction.getUserActionRequest({ token: token }));
        }
        else {
            dispatch(getUserAction.getUserActionFail())
        }
    }, [dispatch])
    const userDetail = useSelector(state => state.getUserSuccess.data);


    const [data, setData] = useState({
        ...userDetail.dataUser
    })

    useEffect(() => {

        setData({
            ...userDetail.dataUser
        })


    }, [userDetail])

    if (token) {
        isLogin = true;
    }
    
    const headerfunction = () => {

        if (role === '3') {
            return (
                <>
                    <NavLink to="/" className="header_content_item"><FontAwesomeIcon icon={faHome}/> TRANG CHỦ</NavLink>
                    <NavLink to="/doctors" className="header_content_item"><FontAwesomeIcon icon={faUserDoctor}/> BÁC SĨ</NavLink>
                    <NavLink to="/comment" className="header_content_item"><FontAwesomeIcon icon={faComment}/> ĐÁNH GIÁ</NavLink>
                    <NavLink to="/booking" className="header_content_item"><FontAwesomeIcon icon={faCalendar}/> ĐẶT LỊCH</NavLink>
               

                </>
            )
        }
        else if (role === '2') {
            return (
                <>
                    <NavLink to="/" className="header_content_item"><FontAwesomeIcon icon={faHome}/>TRANG CHỦ</NavLink>

                    <NavLink to="/comment" className="header_content_item"><FontAwesomeIcon icon={faComment}/>ĐÁNH GIÁ</NavLink>
                    <NavLink to="/phongkham" className="header_content_item"><FontAwesomeIcon icon={faCalendar}/>PHÒNG KHÁM</NavLink>

                </>
            )
        }
        else if (role === '1') {
            return (

                <>
                    <NavLink to="/" className="header_content_item"><FontAwesomeIcon icon={faHome}/>TRANG CHỦ</NavLink>
                    <NavLink to="/manageuser" className="header_content_item"><FontAwesomeIcon icon={faUser}/>BỆNH NHÂN</NavLink>
                    <NavLink to="/managedoctor" className="header_content_item"><FontAwesomeIcon icon={faUserDoctor}/>BÁC SĨ</NavLink>
                    <NavLink to="/comment" className="header_content_item"><FontAwesomeIcon icon={faComment}/>ĐÁNH GIÁ</NavLink>
                    <NavLink to="/phongkham" className="header_content_item"><FontAwesomeIcon icon={faCalendar}/>LỊCH KHÁM</NavLink>
                </>
            )

        }
        else if (role === '4') {
            return (
                <>
                    <NavLink to="/" className="header_content_item"><FontAwesomeIcon icon={faHome}/>TRANG CHỦ</NavLink>
                    <NavLink to="/comment" className="header_content_item"><FontAwesomeIcon icon={faComment}/>ĐÁNH GIÁ</NavLink>
                    <NavLink to="/contact" className="header_content_item"><FontAwesomeIcon icon={faCalendar}/>LIÊN HỆ</NavLink>
                </>
            )
        }
        else {
            return (<>

                <NavLink to="/" className="header_content_item"><FontAwesomeIcon icon={faHome}/>TRANG CHỦ</NavLink>
                <NavLink to="/doctors" className="header_content_item"><FontAwesomeIcon icon={faUserDoctor}/>BÁC SĨ</NavLink>
                <NavLink to="/comment" className="header_content_item"><FontAwesomeIcon icon={faComment}/>ĐÁNH GIÁ</NavLink>
                <NavLink to="/booking" className="header_content_item"><FontAwesomeIcon icon={faCalendar}/>ĐẶT LỊCH</NavLink>
            </>)
        }
    }


    return (<>
        <div id="header">
            <div className="container header">
                <div className="header_icon">  </div>
                <div className="header_content">
                    {
                        headerfunction()


                    }
                </div>
                <div className="header_login">

                    {isLogin ? <> <img onClick={handleClickOpenUser} className="avatar_user" src={data.avatar} alt="" />  <div className="wrapper">

                    </div></> : <> <NavLink to="/register" className="header_content_item">ĐĂNG KÝ</NavLink>
                        <NavLink to="/login" className="header_content_item">ĐĂNG NHẬP</NavLink></>}

                </div>
                <ul id="wrapper" className="wrapper">
                    <li className="user_modal"><NavLink to="/userdetail" className=""> <FontAwesomeIcon icon={faUser} /> CÁ NHÂN</NavLink></li>

                    {role && role === '3' && <li className="user_modal"><NavLink to="/storeclinic" className=""> <FontAwesomeIcon icon={faStore} /> LỊCH KHÁM </NavLink></li>}


                    {/* to="/login" */}
                </ul>

            </div>
        </div>
    </>);
}

export default Header;