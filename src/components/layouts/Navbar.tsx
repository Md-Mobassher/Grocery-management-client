import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cart from "@/components/common/Cart";
import Profile from "../common/Profile";
// import NavItems from "./NavItems";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="bg-green-400 ">
        <p className="p-1 font-semibold text-white text-center text-sm">
          20 % Discount for all product | Code:{" "}
          <span className="font-bold">MOBASSHER</span>
        </p>
      </div>
      <header className=" sticky top-0 z-50 bg-white">
        <div className="flex bg-white  m-0 justify-between items-center h-14 lg:gap-5 gap-2 container mx-auto lg:px-8 md:px-6 px-4">
          <NavLink to="/">
            <img src={logo} alt="Groca Grocery" />
          </NavLink>
          <div className="flex items-center">
            <Input type="text" placeholder="Search" />
            <Button
              className="bg-green-400 hover:bg-green-500 text-white border "
              type="submit"
            >
              <FiSearch className="lg:w-7 md:w-5 w-3" />
            </Button>
          </div>

          <div className="flex justify-end items-center lg:gap-8 gap-4 md:gap-5">
            <Cart />

            <Profile />
          </div>
        </div>

        <div className=" border-y py-[2px]">{/* <NavItems /> */}</div>
      </header>
    </>
  );
};

export default Navbar;
