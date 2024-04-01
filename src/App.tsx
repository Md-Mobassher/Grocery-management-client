import MainLayout from "./components/layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <MainLayout />
      <ToastContainer />
    </>
  );
}

export default App;
