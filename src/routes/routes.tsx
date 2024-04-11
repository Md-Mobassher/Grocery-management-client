import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import { routeGenerator } from "@/utils/routerGenerator";
import { sellerPaths } from "./seller.routes";
import { buyerPaths } from "./buyer.routes";
import { adminPaths } from "./admin.routes";
import Home from "@/pages/Common/Home/Home";
import About from "@/pages/Common/About/About";
import Contact from "@/pages/Common/Contact/Contact";
import Shop from "@/pages/Common/Shop/Shop";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Blogs from "@/pages/Common/Blog/Blogs";
import Blog from "@/pages/Common/Blog/Blog";
import ProductDetailsPage from "@/pages/Common/Product/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/seller",
    element: (
      <ProtectedRoute role="seller">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(sellerPaths),
  },

  {
    path: "/buyer",
    element: (
      <ProtectedRoute role="buyer">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(buyerPaths),
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <Blog />,
      },
      {
        path: "/product/:name",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
