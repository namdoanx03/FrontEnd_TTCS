import "./schedule.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBook } from "../../redux/actions";
import { useSelector } from "react-redux";
function Schedule() {

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getBook.getBookRequest('all'));
        
    }, [dispatch])

    const listBook = useSelector(state => state.getMyBook.Data);
    console.log('List book : ',listBook);



    return (
        <>
            <div id="schedule">
                <div className=" container schedule">

                    <table>
                        <tr className="table_item">
                            <th>Name</th>
                            <th>PhoneNumber</th>
                            <th>Time</th>
                            <th>dentist</th>
                            <th>Tick</th>


                        </tr>
                        <tr className="table_item">
                            <td>Đỗ Tùng Trâm</td>
                            <td>0348741639</td>
                            <td>9:00 1/1/2023</td>
                            <td>Nha Sĩ Lê Ngọc Phụng Dương</td>
                            <td><button className="schedule_done"> Done </button></td>
                        </tr>
                        <tr className="table_item">
                            <td>Đỗ Tùng Trâm</td>
                            <td>0348741639</td>
                            <td>9:00 1/1/2023</td>
                            <td>Nha Sĩ Lê Ngọc Phụng Dương</td>
                            <td><button className="schedule_done"> Done </button></td>
                        </tr>  <tr className="table_item">
                            <td>Đỗ Tùng Trâm</td>
                            <td>0348741639</td>
                            <td>9:00 1/1/2023</td>
                            <td>Nha Sĩ Lê Ngọc Phụng Dương</td>
                            <td><button className="schedule_done"> Done </button></td>
                        </tr>  <tr className="table_item">
                            <td>Đỗ Tùng Trâm</td>
                            <td>0348741639</td>
                            <td>9:00 1/1/2023</td>
                            <td>Nha Sĩ Lê Ngọc Phụng Dương</td>
                            <td><button className="schedule_done"> Done </button></td>
                        </tr>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Schedule;