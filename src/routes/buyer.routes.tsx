import BuyerDashboard from "@/pages/Buyer/BuyerDashboard";
import ChangePassword from "@/pages/Buyer/ChangePassword";
import Favourite from "@/pages/Buyer/Favourite";
import MyOrders from "@/pages/Buyer/MyOrders";
import MyProfilePage from "@/pages/Buyer/MyProfilePage";

export const buyerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <BuyerDashboard />,
  },
  {
    name: "My Orders",
    path: "my-orders",
    element: <MyOrders />,
  },
  {
    name: "Favourite",
    path: "favourite",
    element: <Favourite />,
  },
  {
    name: "My Profile",
    path: "my-profile",
    element: <MyProfilePage />,
  },
  {
    name: "Change Password",
    path: "change-password",
    element: <ChangePassword />,
  },
];
