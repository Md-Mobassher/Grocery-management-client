import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "@/pages/Buyer/About/About";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
