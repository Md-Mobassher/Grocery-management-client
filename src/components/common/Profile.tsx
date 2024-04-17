import { LogIn, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfull.", {
      position: "top-right",
      autoClose: 3000,
    });
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CgProfile className="size-6 rounded-3xl hover:bg-green-500 hover:text-white   transition-all duration-300" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {user && user.data !== null && (
            <>
              <NavLink
                className="hover:text-white"
                to={`/${user?.role}/dashboard`}
              >
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>My Dashboard</span>
                </DropdownMenuItem>
              </NavLink>
            </>
          )}
          <DropdownMenuSeparator />
          {user && user.data !== null ? (
            <div onClick={handleLogout}>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </div>
          ) : (
            <NavLink to={`/login`}>
              <DropdownMenuItem className="hover:bg-green-400 hover:text-white">
                <LogIn className="mr-2 h-4 w-4" />
                <span>Login</span>
              </DropdownMenuItem>
            </NavLink>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
