import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import { createUser } from "../../redux/actions"
import "./register.css"
import { useState } from "react";
import FileBase64 from "react-file-base64"
import { registerUser } from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register( { propNumber } ) {
console.log("props : ", propNumber);
    const [register, setRegister] = useState({

        name: '',
        username: '',
        password: '',
        phonenumber: '',
        age: '',
        role:  propNumber ? '' : '3' ,
        avatar: ''

    })
 
    const handleClickRegister = async () => {
        await registerUser(register)
            .then(

                res => {
                   if( res.data.errcode === 0 ){
                    toast.success('Đăng Ký Tài Khoản Thành Công !', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                   }else{
                    toast.error('Đã Tồn Tại Tài Khoản !', {
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
                    setRegister({
                        name: '',
                        username: '',
                        password: '',
                        phonenumber: '',
                        age: '',
                        avatar: '',
                        role: ''
                    })
                }



            )
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div  className="Register" >

                <div style={propNumber ? {width : '80%' , position:'relative',bottom:'-50px' } : {}} className="Register_content">
                    <h3 className="Register_text">Register here</h3>
                    <div className="Register_input">
                        <input placeholder="Name..." value={register.name} onChange={e => setRegister({ ...register, name: e.target.value })} />
                        <br />
                        <input placeholder="UserName..." value={register.username} onChange={e => setRegister({ ...register, username: e.target.value })} required/>
                        <br />
                        <input placeholder="PassWord..." value={register.password} onChange={e => setRegister({ ...register, password: e.target.value })} required/>
                        <br />
                        <input placeholder="PhoneNumber..." value={register.phonenumber} onChange={e => setRegister({ ...register, phonenumber: e.target.value })} />
                        <br />
                        <input placeholder="Age..." value={register.age} onChange={e => setRegister({ ...register, age: e.target.value })} />
                        <input placeholder="Role..." value={ propNumber ? register.role : '3'} onChange={e => setRegister({ ...register, role: e.target.value })} />

                        <label for="myfile">choose a photo</label>
                        < FileBase64
                            accept="image/*"
                            multiple={false}
                            tyle="file"
                            value={register.avatar}
                            onDone={({ base64 }) => setRegister({ ...register, avatar: base64 })}
                        />
                    </div>
                    <div className="Register_btn">
                        { !propNumber && <button> <NavLink to="/login" className="navlink">Login</NavLink> </button>  }
                        {/* <button> <NavLink to="/login" className="navlink">Login</NavLink> </button> */}
                        <button onClick={handleClickRegister}> <NavLink className="navlink">{ !propNumber ? 'Register' : 'Add New User' }</NavLink> </button>
                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}
export default Register;