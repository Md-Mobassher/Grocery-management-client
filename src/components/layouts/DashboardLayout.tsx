import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import DashboardNavbar from "./DashboardNavbar";

const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sidebar />
      <Layout>
        <DashboardNavbar />

        <Content className="border border-1 ">
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
