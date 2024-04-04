import { selectCurrentToken, TUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { buyerPaths } from "@/routes/buyer.routes";
import { sellerPaths } from "@/routes/seller.routes";
import { TSidebarItem } from "@/types/sidebar.type";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerators";
import { verifyToken } from "@/utils/verifyToken";
import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { adminPaths } from "@/routes/admin.routes";

const { Sider } = Layout;

const userRole = {
  SUPER_ADMIN: "superAdmin",
  ADMIN: "admin",
  SELLER: "seller",
  BUYER: "buyer",
};

const Sidebar = () => {
  const token = useAppSelector(selectCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems: TSidebarItem[] | undefined;

  switch ((user as TUser)!.role) {
    case userRole.SUPER_ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.SELLER:
      sidebarItems = sidebarItemsGenerator(sellerPaths, userRole.SELLER);
      break;
    case userRole.BUYER:
      sidebarItems = sidebarItemsGenerator(buyerPaths, userRole.BUYER);
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#FFF",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="demo-logo-vertical" />

      <div className="bg-white flex justify-center items-center py-2 mt-1 border-b-2 border-b-slate-200">
        <NavLink to="/">
          <img src={logo} alt="Groca Grocery" />
        </NavLink>
      </div>
      <Menu
        className="bg-white"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems as MenuItemType[]}
      />
    </Sider>
  );
};

export default Sidebar;
