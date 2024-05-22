import "./login.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

function Login() {
    const dispatch = useDispatch();
   
    const [show ,setShow] = useState(false)
     const handleClickEye = () =>{
        setShow( !show )
     }

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleClickLogin = React.useCallback(() => {
        dispatch(getUser.getUserRequest(user));
  


        setUser({
            username: '',
            password: '',
        })



    }, [user, dispatch])
    // useEffect(() => {
    // }, [success])
    return (
        <>
            {console.log('render')}
            <div className="Login" >

                <form action="/action_page.php" className="Login_content">
                    <h3 className="Login_text">Login here</h3>
                    <div className="Login_input">
                        <input value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} placeholder="UserName..." required/>
                        <br />
                        <input className="input_parent" type={ show ? 'text' : 'password'  }  value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} placeholder="PassWord..."  required/>
                        <span className="childrenofInput"> <FontAwesomeIcon onClick={handleClickEye} icon={ show ? faEyeSlash : faEye}/></span>

                    </div>
                    <h5 className="Login_text_sub"> click the login button </h5>
                    <div className="Login_btn">
                        <button className="abcdlogin" onClick={handleClickLogin} >
                            <span  id="abcd" className="navlink">Login</span>
                           
                        </button>
                        {/* onClick={handleClickLogin} */}
                        <div className="abcdlogin"><NavLink className="navlink" to="/register">Register</NavLink> </div>
                    </div>
                </form>
            </div>

        </>

    );
}
export default Login;