import "./doctor.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFullUser } from "../../redux/actions";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faXmark } from '@fortawesome/free-solid-svg-icons'

function Doctor() {
    // Get the modal
    const [inforDoctor, setInforDoctor] = useState({

        name: '',
        age: '',
        phonenumber: '',
        avatar : ''


    })
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background : '#89e8d1'
        },
    };
    function closeModal() {
        setIsOpen(false);
    }
    const handleSeeIndex = (index) => {
        console.log('index :', index);
        let datafake = listdoctor[index];
        console.log(datafake);
        setInforDoctor({
            name: datafake.name,
            age: datafake.age,
            phonenumber: datafake.phonenumber,
            avatar : datafake.avatar
        })
        setIsOpen(true)

    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFullUser.getFullUserRequest('2'))
    }, [dispatch])

    const listdoctor = useSelector(state => state.getfullUser.data);
    console.log("listdoctor : ", listdoctor);

    return (
        <>

            <div id="doctor">
                <div className="doctor container">
                    <h1 className="doctor_text"> Đội ngũ bác sĩ phòng khám </h1>
                    {listdoctor.map((doctor, index) => {
                        return (
                            <div onClick={() => handleSeeIndex(index)} key={doctor._id} className="doctor_detail">
                                <img src={doctor.avatar} alt="" className="doctor_detail_img"></img>
                                <div className="doctor_detail_content">
                                    <span> {`Name : ${doctor.name} - Age : ${doctor.age}`}</span><br />

                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="btn_close_modal" onClick={closeModal}> <FontAwesomeIcon icon={faXmark}/> </div>

                <form>
                    <img className="avatar_modal"  src={ inforDoctor.avatar } alt=""/>
                    <p> { ` Họ Và Tên :  ${inforDoctor.name}` } </p>
                    <p> { ` Tuổi :  ${inforDoctor.age}` } </p>
                    <p> { ` Số Điện Thoại :  ${inforDoctor.phonenumber}` } </p>


                </form>
            </Modal>
        </>);
}

export default Doctor;