import { Layout } from "antd";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sidebar />
      <Layout>
        <div className="py-3 bg-white border">
          <Navbar />
        </div>

        <Content className="border border-1 bg-sky-50 border-slate-200">
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
