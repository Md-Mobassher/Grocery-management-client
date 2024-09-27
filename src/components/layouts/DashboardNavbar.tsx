import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import Profile from "../common/Profile";

const DashboardNavbar = () => {
  return (
    <div className=" bg-white flex justify-between items-center px-4 py-3">
      <NavLink to="/">
        <img src={logo} alt="Groca Grocery" />
      </NavLink>
      <Profile />
    </div>
  );
};

export default DashboardNavbar;
