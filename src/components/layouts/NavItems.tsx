import { NavLink } from "react-router-dom";
import CategoryDropdown from "../common/CategoryDropdown";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItem = (
  <>
    <NavLink className="hover:text-white mr-2" to={`/`}>
      <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-green-500 hover:text-white">
        Home
      </div>
    </NavLink>
    <NavLink className="hover:text-white mr-2" to={`/about`}>
      <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-green-500 hover:text-white">
        About Us
      </div>
    </NavLink>
    <NavLink className="hover:text-white mr-2" to={`/shop`}>
      <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-green-500 hover:text-white">
        Shop
      </div>
    </NavLink>
    <NavLink className="hover:text-white mr-2" to={`/blog`}>
      <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-green-500 hover:text-white">
        Blog
      </div>
    </NavLink>
    <NavLink className="hover:text-white mr-2" to={`/contact`}>
      <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-green-500 hover:text-white">
        Contact
      </div>
    </NavLink>
  </>
);

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        {/* category menu */}
        <CategoryDropdown />

        {/*  large device menu */}
        <div className="hidden md:block">
          <div className="flex justify-end items-center">{navItem}</div>
        </div>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="-mr-2 flex md:hidden p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className=" text-slate-700  rounded"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <Sheet>
              <SheetTrigger asChild>
                <GiHamburgerMenu className="size-8" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <NavLink to="/">
                    <img src={logo} alt="Groca Grocery" />
                  </NavLink>
                </SheetHeader>
                <div className="flex flex-col pt-5">{navItem}</div>
              </SheetContent>
            </Sheet>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
