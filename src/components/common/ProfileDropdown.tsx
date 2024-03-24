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
        <DropdownMenuItem>My Profile</DropdownMenuItem>
        <DropdownMenuItem>Dashboard</DropdownMenuItem>
        <DropdownMenuItem>Login</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
