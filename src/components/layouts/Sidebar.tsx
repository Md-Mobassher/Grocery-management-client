import { selectCurrentToken, TUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { buyerPaths } from "@/routes/buyer.routes";
import { sellerPaths } from "@/routes/seller.routes";
import { TSidebarItem } from "@/types/sidebar.type";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerators";
import { verifyToken } from "@/utils/verifyToken";
import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
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
        background: "white",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="demo-logo-vertical " />

      <div className="bg-white flex flex-col justify-center items-start p-2 pl-5">
        <h2 className="text-md">Welcome</h2>
        <h3 className="text-xl font-semibold text-green-500">Md Mobassher</h3>
      </div>
      <Menu
        className="bg-white mt-4"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems as MenuItemType[]}
      />
    </Sider>
  );
};

export default Sidebar;
