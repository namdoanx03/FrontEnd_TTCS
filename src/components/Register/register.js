import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { registerUser } from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./register.css";

function Register({ propNumber }) {

    const [register, setRegister] = useState({
        name: '',
        username: '',
        password: '',
        phonenumber: '',
        age: '',
        role: propNumber ? '' : '3',
        avatar: '',
        confirmPassword: ''
    });

    const isValidInputs = () => {
        if (!register.name ) {
            toast.error("Name are required !");
            return false;
        }
        if (!register.username) {
            toast.error("Username are required !");
            return false;
        }
        if (!register.password) {
            toast.error("Password are required !");
            return false;
        }
        if (register.password !== register.confirmPassword) {
            toast.error("Your password is not the same !");
            return false;
        }
        if ( !register.phonenumber) {
            toast.error("Phonenumber are required !");
            return false;
        }
        if ( !register.age) {
            toast.error("Age are required !");
            return false;
        }
        
        return true;
    }

    const handleClickRegister = async () => {
        if (!isValidInputs()) return;

        try {
            const res = await registerUser(register);
            if (res.data.errcode === 0) {
                toast.success('Đăng Ký Tài Khoản Thành Công!', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // Xóa dữ liệu trong state sau khi hoàn thành đăng ký
                setRegister({
                    name: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    phonenumber: '',
                    age: '',
                    avatar: '',
                    role: propNumber ? '' : '3'
                });
            } else {
                toast.error('Đã Tồn Tại Tài Khoản!', {
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
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="background-register">
                <Container className="d-flex justify-content-center align-items-center vh-100">
                    <Row className="w-100 justify-content-center">
                        <Col xs={12} md={6} lg={4}>
                            <div className="register">
                                <Form className="register-content" style={propNumber ? { width: '80%', position: 'relative', bottom: '-50px' } : {}}>
                                    <h3 className="register-text text-center">Register here</h3>
                                    <div className="form-group mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Name..."
                                            value={register.name}
                                            onChange={e => setRegister({ ...register, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Username..."
                                            value={register.username}
                                            onChange={e => setRegister({ ...register, username: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <Row className="form-group mb-3">
                                        <Col xs={6}>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password..."
                                                value={register.password}
                                                onChange={e => setRegister({ ...register, password: e.target.value })}
                                                required
                                            />
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm password..."
                                                value={register.confirmPassword}
                                                onChange={e => setRegister({ ...register, confirmPassword: e.target.value })}
                                                required
                                            />
                                        </Col>
                                    </Row>
                                    <div className="form-group mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="PhoneNumber..."
                                            value={register.phonenumber}
                                            onChange={e => setRegister({ ...register, phonenumber: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Age..."
                                            value={register.age}
                                            onChange={e => setRegister({ ...register, age: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <Form.Control
                                            type="number"
                                            placeholder="Role..."
                                            value={propNumber ? register.role : '3'}
                                            onChange={e => setRegister({ ...register, role: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <div>
                                            <Form.Label>Choose a photo</Form.Label>
                                        </div>
                                        <FileBase64
                                            accept="image/*"
                                            multiple={false}
                                            type="file"
                                            value={register.avatar}
                                            onDone={({ base64 }) => setRegister({ ...register, avatar: base64 })}
                                        />
                                    </div>
                                    <div className="register-btn text-center">
                                        <Button onClick={handleClickRegister} className="w-100 my-2">
                                            {!propNumber ? 'Register' : 'Add New User'}
                                        </Button>
                                    </div>
                                    <div className="text-center mt-3">
                                        <span>Already have an account?</span>
                                        <NavLink className="abcdlogin navlink btn-register w-50 mt-2" to="/login">Login</NavLink>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </div>
        </>
    );
}

export default Register;
