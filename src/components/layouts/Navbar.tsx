import { Layout } from "antd";
import { Button } from "../ui/button";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { NavLink, useNavigate } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Header className="shadow-sm bg-white">
      <div className="flex justify-between items-center h-full w-full">
        <div className="ml-auto lg:px-10 lg:gap-5 gap-2">
          <NavLink className="hover:text-white mr-2" to={`/`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white ml-5">
              Home
            </Button>
          </NavLink>

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

          {user && user.data !== null ? (
            <Button
              onClick={() => handleLogout()}
              className="bg-white text-black hover:bg-green-600 hover:text-white "
            >
              Logout
            </Button>
          ) : (
            <NavLink to="/login">
              <Button className="bg-white text-black hover:bg-green-600 hover:text-white ">
                Login
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
