import "./login.css";
import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Container, Form, Button, InputGroup, Row, Col } from "react-bootstrap";

function Login() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClickEye = () => setShow(!show);

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const handleClickLogin = useCallback((e) => {
        e.preventDefault();
        dispatch(getUser.getUserRequest(user));
        setUser({
            username: '',
            password: '',
        });
    }, [user, dispatch]);

    return (
        <div className="background-login">
            <Container fluid className="d-flex justify-content-center align-items-center vh-100 ">
                <Row className="w-100 justify-content-center">
                    <Col xs={12} md={6} lg={4}>
                        <div className="Login">
                            <Form className="Login_content" onSubmit={handleClickLogin}>
                                <h3 className="Login_text text-center">Login here</h3>
                                <Form.Group className="Login_input mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username..."
                                        value={user.username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="Login_input mb-3">
                                    <InputGroup>
                                        <Form.Control
                                            type={show ? 'text' : 'password'}
                                            placeholder="Password..."
                                            value={user.password}
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                                            required
                                        />
                                        <InputGroup.Text onClick={handleClickEye} style={{ cursor: 'pointer' }}>
                                            <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <div className="Login_btn text-center">
                                    <Button type="submit" className="abcdlogin me-2 w-100 my-3">
                                        Login
                                    </Button>
                                    <div>
                                        <a href="#" className="forgot-password">Forgotten password?</a>
                                    </div>
                                </div>
                                <div className="register-form">
                                    <div className="create-account text-center">
                                        <NavLink className="abcdlogin navlink btn btn-success border-top w-75 " to="/register">Create new account</NavLink>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
