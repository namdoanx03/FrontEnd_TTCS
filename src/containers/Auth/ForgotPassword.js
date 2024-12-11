import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ForgotPassword.scss";

import { postUserForgotPassword } from "../../services/userService";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");

  const { isLoggedIn, userInfo, language } = useSelector((state) => ({
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  }));


  useEffect(() => {
    document.title = "Forgot Password";
  }, []);

  const handleForgotPassword = async () => {
    // alert(email.trim().length);
    // alert(email.length);
    if (email.trim().length === 0) {
      if(language=="en"){
        toast.error("Email input empty!");
      }else{
        toast.error("Bạn chưa nhập email!");
      }
      return;
    }
    let res = await postUserForgotPassword({
      email: email.trim(),
    });
    if (res && res.errCode === 0) {
      if(language=="en"){
        toast.success("Send email to retrieve password succeed!");
      }else{
        toast.success("Gửi email lấy lại mật khẩu thành công, hãy kiểm tra email của bạn!");
      }
    } else {
      if(language=="en"){
        toast.error("User's not found, please retype email!");
      }else{
        toast.error("Không tìm thấy email trong hệ thống, vui lòng nhập lại email!");
      }
    }
  };
  return (
    <>
      <div className="login-background">
        <div className="forgot-password-container">
          <div className="login-content row">
            <div className="col-12 text-login"><FormattedMessage id={"login.forgot-password"} /></div>
            <div className="col-12 form-group login-input">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder={language==="en" ? "Enter your email to retrieve password" : "Nhập email của bạn để lấy lại mật khẩu"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  handleForgotPassword();
                }}
              >
                <FormattedMessage id={"login.retrieve"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
