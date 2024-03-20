import { Button } from "../ui/button";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { NavLink } from "react-router-dom";
import CategoryDropdown from "../common/CategoryDropdown";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="shadow-sm bg-white border">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        <CategoryDropdown />
        <div className="flex justify-end items-center">
          <NavLink className="hover:text-white mr-2" to={`/`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white">
              Home
            </Button>
          </NavLink>
          <NavLink className="hover:text-white mr-2" to={`/about`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white">
              About
            </Button>
          </NavLink>
          <NavLink className="hover:text-white mr-2" to={`/shop`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white">
              Shop
            </Button>
          </NavLink>
          <NavLink className="hover:text-white mr-2" to={`/contact`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white">
              Contact
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
