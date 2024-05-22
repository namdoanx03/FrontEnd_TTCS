import "./evaluate.css";
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getFullComment } from "../../../redux/actions";
function Evaluate( { Listcomment } ) {

    console.log(' props 2',Listcomment);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getFullComment.getFullCommentRequest())
    // }, [dispatch])
    // const listcomment = useSelector(state => state.getFullComment.data);
   
    return (
        <>
            {Listcomment && Listcomment.length > 0 &&  Listcomment.map((comment, index) => {
                return (
                
                    <div key={index} className="Evaluate">
                        <img className="avatar_user image_user_avatar" src={comment.iduser != null ? comment.iduser.avatar : 'https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg' } alt="" />
                        <span className="Evaluate_count">
                            {` Điểm Đánh Giá : ${comment ? comment.star : ''}`}
                        </span>
                        <br />
                        <span className="Evaluate_content">
                            {`  Nội Dung : ${comment ? comment.content : ''}`}
                        </span>
                        <div className="Evaluate_img">
                            <img className="img_evalua" src={comment ? comment.comment_img : ''} alt="" />
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Evaluate;