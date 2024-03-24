import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cart from "@/pages/Home/Cart";
import Profile from "../common/Profile";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header className="shadow-sm ">
      <div className="bg-green-400 ">
        <p className="p-1 font-semibold text-white text-center text-sm">
          20 % Discount for all product | Code:{" "}
          <span className="font-bold">MOBASSHER</span>
        </p>
      </div>
      <div className="flex bg-white  m-0 justify-between items-center h-16 max-w-7xl mx-auto">
        <NavLink to="/">
          <img src={logo} alt="Groca Grocery" />
        </NavLink>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search" />
          <Button
            className="bg-green-400 hover:bg-green-500 text-white border "
            type="submit"
          >
            Search
          </Button>
        </div>

        <div className="flex justify-end items-center">
          <div className="flex lg:gap-5 gap-0">
            <Cart />

            <Profile />
          </div>
        </div>
      </div>
      <NavItems />
    </header>
  );
};

export default Navbar;
