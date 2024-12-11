import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  let history = useHistory();

  useEffect(() => {
    document.title = "ERROR 404";
  }, []);

  const handleClickBtn = () => {
    history.push("/");
  };
  return (
    <>
      <div className="error404">
        <div className="error-img"></div>
        <div className="error-content">
          <h3>Xin lỗi, chúng tôi không tìm thấy trang mà bạn cần!</h3>
          <div class="list-contact">
            <div class="itemct">
              <button className="btn btn-primary" onClick={handleClickBtn}>
                Trở về trang chủ
              </button>
            </div>
            <div class="itemct">
              <p>
                Gọi hỗ trợ miễn phí
                <br />
                (7h30 - 22h)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
