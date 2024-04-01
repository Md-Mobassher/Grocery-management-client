import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Navbar from "./NavItems";
import { Outlet } from "react-router-dom";
// import { Header } from "antd/es/layout/layout";
import Footer from "./Footer";
const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sidebar />
      <Layout>
        {/* <Header style={{ background: "white" }}>
          <div className="py-3 bg-white border">
            <Navbar />
          </div>
        </Header> */}

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
