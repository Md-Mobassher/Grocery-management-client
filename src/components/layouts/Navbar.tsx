import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cart from "@/components/common/Cart";
import Profile from "../common/Profile";
import { FiSearch } from "react-icons/fi";
import Menu, { Item } from "./Menu";
import MobileMenu from "./MobileMenu";

const menus: Item[] = [
  {
    title: "Category",
    link: "/shop",
    option: "sub",
    subItems: [
      { title: "SubCategory 1.1", link: "/" },
      { title: "SubCategory 1.2", link: "/" },
    ],
  },

  {
    title: "Home",
    link: "/",
  },

  {
    title: "About",
    link: "/about",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      {/* header-1 */}
      <div className="bg-green-400 ">
        <p className="p-1 font-semibold text-white text-center text-sm">
          20 % Discount for all product | Code:{" "}
          <span className="font-bold">MOBASSHER</span>
        </p>
      </div>

      {/* header-2 */}

      <div className="sticky top-0 z-50 bg-white">
        <header className=" ">
          <div className="flex bg-white  m-0 justify-between items-center h-14 lg:gap-5 gap-2 container mx-auto lg:px-8 md:px-6 px-4">
            <NavLink to="/">
              <img src={logo} alt="Groca Grocery" />
            </NavLink>
            {/* search */}
            <div className=" hidden md:block">
              <div className="items-center flex  ">
                <Input type="text" placeholder="Search" />
                <Button
                  className="bg-green-400 hover:bg-green-500 text-white border "
                  type="submit"
                >
                  <FiSearch className="lg:w-7 md:w-5 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex justify-end items-center lg:gap-8 gap-4 md:gap-5">
              <Cart />

              <Profile />
            </div>
          </div>
        </header>

        {/* menu */}
        <div className="container mx-auto lg:px-8 md:px-6 px-4 border-y flex justify-between items-center">
          <div className="md:hidden flex ">
            <MobileMenu items={menus} />
          </div>

          <div className="hidden md:block ">{<Menu items={menus} />}</div>

          {/* search */}
          <div className=" md:hidden flex my-1 ">
            <div className="items-center flex  ">
              <Input type="text" placeholder="Search" />
              <Button
                className="bg-green-400 hover:bg-green-500 text-white border "
                type="submit"
              >
                <FiSearch className="lg:w-7 md:w-5 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
