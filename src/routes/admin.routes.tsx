import AdminDashboard from "@/pages/Admin/AdminDashboard";
import CreateAdmin from "@/pages/Admin/AdminManagement/CreateAdmin";
import CreateABuyer from "@/pages/Admin/BuyerManagement/CreateABuyer";
import GetAllOrders from "@/pages/Admin/OrderManagement/GetAllOrders";
import CreateAProduct from "@/pages/Admin/ProductManagement/CreateAProduct";
import SalesHistory from "@/pages/Admin/SalesManagement/SalesHistory";
import CreateASeller from "@/pages/Admin/SellerManagement/CreateASeller";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Admin Management",
    children: [
      {
        name: "Create An Admin",
        path: "create-anAdmin",
        element: <CreateAdmin />,
      },
    ],
  },
  {
    name: "Seller Management",
    children: [
      {
        name: "Create A Seller",
        path: "create-a-seller",
        element: <CreateASeller />,
      },
    ],
  },
  {
    name: "Buyer Management",
    children: [
      {
        name: "Create A Buyer",
        path: "create-a-buyer",
        element: <CreateABuyer />,
      },
    ],
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create A Product",
        path: "create-a-buyer",
        element: <CreateAProduct />,
      },
    ],
  },
  {
    name: "Sales Management",
    children: [
      {
        name: "Sales History",
        path: "sales-history",
        element: <SalesHistory />,
      },
    ],
  },
  {
    name: "Order Management",
    children: [
      {
        name: "Get all order",
        path: "get-all-orders",
        element: <GetAllOrders />,
      },
    ],
  },
];
