import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import CategoryDropdown from "../common/CategoryDropdown";

const NavItems = () => {
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
              About Us
            </Button>
          </NavLink>
          <NavLink className="hover:text-white mr-2" to={`/shop`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white">
              Shop
            </Button>
          </NavLink>
          <NavLink className="hover:text-white mr-2" to={`/blog`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white">
              Blog{" "}
            </Button>
          </NavLink>
          <NavLink className="hover:text-white mr-2" to={`/contact`}>
            <Button className="bg-white text-black hover:bg-green-500 hover:text-white">
              Contact
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
