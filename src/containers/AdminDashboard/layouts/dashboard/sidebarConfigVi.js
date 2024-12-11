// component
import Iconify from "../../components/Iconify";
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfigVi = [
  {
    title: "Bảng điều khiển",
    path: "/admin-dashboard/app",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Quản lý người dùng",
    path: "/admin-dashboard/user",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "Quản lý bác sĩ",
    path: "/admin-dashboard/manage-doctor",
    icon: getIcon("openmoji:male-doctor"),
  },
  {
    title: "Quản lý ca khám bệnh",
    path: "/admin-dashboard/manage-schedule",
    icon: getIcon("icon-park:plan"),
  },
  {
    title: "Quản lý bệnh viện",
    path: "/admin-dashboard/manage-clinic",
    icon: getIcon("healthicons:ambulatory-clinic"),
  },
  {
    title: "Quản lý chuyên khoa",
    path: "/admin-dashboard/manage-specialty",
    icon: getIcon("medical-icon:health-services"),
  },
  {
    title: "Quản lý thuốc",
    path: "/admin-dashboard/manage-drug",
    icon: getIcon("mdi:drugs"),
  },
  {
    title: "Khôi phục tài khoản",
    path: "/admin-dashboard/restore-user",
    icon: getIcon("eva:people-fill"),
  },
  // {
  //   title: "product",
  //   path: "/admin-dashboard/products",
  //   icon: getIcon("eva:shopping-bag-fill"),
  // },
  // {
  //   title: "blog",
  //   path: "/admin-dashboard/blog",
  //   icon: getIcon("eva:file-text-fill"),
  // },
  // {
  //   title: "login",
  //   path: "/admin-dashboard/login",
  //   icon: getIcon("eva:lock-fill"),
  // },
  // {
  //   title: "register",
  //   path: "/admin-dashboard/register",
  //   icon: getIcon("eva:person-add-fill"),
  // },
  // {
  //   title: "Not found",
  //   path: "/admin-dashboard/404",
  //   icon: getIcon("eva:alert-triangle-fill"),
  // },
];

export default sidebarConfigVi;
