import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Navbar from "./Navbar";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="shadow-sm bg-white  m-0">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
        {user === null && (
          <NavLink to="/">
            <img src={logo} alt="Groca Grocery" />
          </NavLink>
        )}
        <div className="flex justify-end items-center">
          {user && user.data !== null && (
            <>
              <NavLink
                className="hover:text-white"
                to={`/${user?.role}/dashboard`}
              >
                <Button className="bg-white text-black hover:bg-green-600 hover:text-white ">
                  Dashboard
                </Button>
              </NavLink>
            </>
          )}

          <div className="flex">
            <NavLink className="p-5" to="/login">
              <FaCartPlus className="size-6" />
            </NavLink>
            {user && user.data !== null ? (
              <Button
                onClick={() => handleLogout()}
                className="bg-white text-black hover:bg-green-600 hover:text-white "
              >
                Logout
              </Button>
            ) : (
              <NavLink className="p-5" to="/login">
                <CgProfile className="size-6" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
