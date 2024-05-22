import "./comment.css"
import Evaluate from "./Evaluate/evaluate";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCookie } from "../../Cookies";
import React from "react";
import { createComment } from "../../redux/actions";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar, faXmark } from '@fortawesome/free-solid-svg-icons'
import FileBase64 from "react-file-base64";
import SubEvaluate from "../Evaluate/Evaluate";
import { getFullComment } from "../../redux/actions";
import { useSelector } from "react-redux";



function Comment() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal2() {
        setIsOpen(true);
    }



    function closeModal2() {
        setIsOpen(false);
    }
    const [length, setLength] = useState({
        so1: 0,
        so2: 0,
        so3: 0,
        so4: 0,
        so5: 0
    })
    let role = getCookie('role');
    console.log(role);
    let isLogin = false;
    const token = getCookie('token');
    if (token) {
        isLogin = true
    }
    const [open, setOpen] = useState(false);
    const handleClickOpenModel = () => {
        setOpen(!open)
    }
    Modal.setAppElement();
    const handleClickModal = () => {
        setOpen(!open)
    }
    function closeModal() {
        setOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#89e8d1"
        },
    };
    const id = getCookie("id");
    const [evalua, setEvalua] = useState({
        star: '',
        content: '',
        comment_img: '',
        iduser: id,
    })
    const dispatch = useDispatch();
    const handleClickAddComment = () => {
        dispatch(createComment.createCommentRequest(evalua));
        setOpen(!open)

        setEvalua({
            star: '',
            content: '',
            comment_img: '',
            iduser: id,
        })
    }

    useEffect(() => {
        dispatch(getFullComment.getFullCommentRequest())
    }, [dispatch, open])
    const Listcomment = useSelector(state => state.getFullComment.data);
    console.log('full comment : ', Listcomment);

    useEffect(() => {
        setLength({

            so1: Listcomment.filter(element => {
                if (element.star === '1') {
                    return true;
                }
                return false;
            }).length,
            so2: Listcomment.filter(element => {
                if (element.star === '2') {
                    return true;
                }
                return false;
            }).length,
            so3: Listcomment.filter(element => {
                if (element.star === '3') {
                    return true;
                }
                return false;
            }).length,
            so4: Listcomment.filter(element => {
                if (element.star === '4') {
                    return true;
                }
                return false;
            }).length,
            so5: Listcomment.filter(element => {
                if (element.star === '5') {
                    return true;
                }
                return false;
            }).length
        })
    }, [Listcomment])
    return (

        <>

            {console.log('length : ', length)}

            <div id="comment">
                <div className="container comment">
                    <Modal
                        style={customStyles}
                        isOpen={open}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"

                    >
                        <div onClick={handleClickModal} className="closeModal"><FontAwesomeIcon icon={faXmark} /></div>

                        <form>
                            <div className="commentfromuser">
                                <div className="evalua_star commentfromuser_item">
                                    <label for="star">Đánh giá </label>

                                    <select style={{ padding: '10px', border: 'none', outline: "none", borderRadius: '50px' }} name="star" id="star" onChange={e => setEvalua({ ...evalua, star: e.target.value })} >

                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                    </select>

                                </div>
                                <div className="evalua_content commentfromuser_item">

                                    <input placeholder="Nội Dung..." value={evalua.content} onChange={e => setEvalua({ ...evalua, content: e.target.value })} />

                                </div>

                                <div className="elavua_img commentfromuser_item">
                                    <label for="myfile">Chọn một ảnh : </label>
                                    {/* <input type="file" id="myfile" name="myfile" /> */}
                                    < FileBase64
                                        accept="image/*"
                                        multiple={false}
                                        tyle="file"
                                        value={evalua.comment_img}
                                        onDone={({ base64 }) => setEvalua({ ...evalua, comment_img: base64 })}

                                    />
                                </div>

                                <button className="btn_add_an_comment" onClick={handleClickAddComment} >  Thêm </button>

                            </div>

                        </form>
                    </Modal>

                    {isLogin ? <button onClick={handleClickOpenModel} className="addacomment" ><FontAwesomeIcon icon={faPlus} /> </button> : <></>}

                    <div className="comment_list">


                        <Evaluate open={open} Listcomment={Listcomment} />


                        <Modal
                            isOpen={modalIsOpen}

                            onRequestClose={closeModal2}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            {role && role === '1' && <SubEvaluate length={length} />}
                        </Modal>
                        {role && role === '1' && <button className="btn_click_openmodal_evaluate" onClick={openModal2}><FontAwesomeIcon icon={faStar} /></button>}
                    </div>


                </div>
            </div>


        </>


    );
}

export default Comment;