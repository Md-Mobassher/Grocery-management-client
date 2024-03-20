import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        <CgProfile className="size-6 rounded-3xl hover:bg-green-500 hover:text-white hover:scale-125  transition-all duration-300" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Fruits & Vegetables</DropdownMenuItem>
        <DropdownMenuItem>Home & Kitchen</DropdownMenuItem>
        <DropdownMenuItem>Biscuits, Snacks & Chocolates</DropdownMenuItem>
        <DropdownMenuItem>Meats, Frozen & Seafood</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
