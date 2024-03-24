import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Navbar from "./NavItems";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content className="border border-1 bg-sky-50 border-slate-200">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
