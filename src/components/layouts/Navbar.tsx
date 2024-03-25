import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cart from "@/pages/Home/Cart";
import Profile from "../common/Profile";
import NavItems from "./NavItems";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="shadow-sm w-full">
      <div className="bg-green-400 ">
        <p className="p-1 font-semibold text-white text-center text-sm">
          20 % Discount for all product | Code:{" "}
          <span className="font-bold">MOBASSHER</span>
        </p>
      </div>
      <div className="flex bg-white  m-0 justify-between items-center h-16 max-w-7xl mx-auto px-4">
        <NavLink to="/">
          <img src={logo} alt="Groca Grocery" />
        </NavLink>
        <div className="flex items-center">
          <Input type="text" placeholder="Search" />
          <Button
            className="bg-green-400 hover:bg-green-500 text-white border "
            type="submit"
          >
            <FiSearch className="w-7" />
          </Button>
        </div>

        <div className="flex justify-end items-center gap-5">
          <Cart />

          <Profile />
        </div>
      </div>
      <NavItems />
    </header>
  );
};

export default Navbar;
