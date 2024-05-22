import Home from "../components/Home/home"
import Booking from "../components/Booking/booking"
import Comment from "../components/Comment/comment"
import Login from "../components/Login/login"
import Register from "../components/Register/register"
import User from "../components/User/user"
import Doctor from "../components/Doctors/doctor"
import ManageUser from "../components/ManageUser/manageuser"
// import Evaluate from "../components/Evaluate/Evaluate"
import ManageDoctor from "../components/ManageDoctor/ManageDoctor"
import Schedule from "../components/Schedule/schedule"
import StoreClinic from "../components/StoreClinic/StoreClinic"
import Clinic from "../components/Clinic/clinic"
import Contact from "../components/Contact/contact"
// khong can dang nhap van xem duoc
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/booking', Component: Booking },
    { path: '/comment', Component: Comment },
    { path: '/login', Component: Login, layout: null },
    { path: '/register', Component: Register, layout: null },
    { path: '/userdetail', Component: User },
    { path: '/doctors', Component: Doctor },
    { path: '/manageuser', Component: ManageUser },
    // { path: '/evaluate', Component: Evaluate },
    { path: '/managedoctor', Component: ManageDoctor },
    { path: '/schedule', Component: Schedule },
    { path: '/storeclinic', Component: StoreClinic },
    { path: '/phongkham', Component: Clinic },
    { path: '/contact', Component: Contact },








]
// phai can dang nhap moi xem duoc
const privateRoutes = [

]


export { publicRoutes, privateRoutes }