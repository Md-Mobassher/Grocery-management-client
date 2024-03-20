import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

import { Toaster } from "./components/ui/toaster";
import About from "./pages/Buyer/About/About";

function App() {
  return (
    <>
      <About />
      <ProtectedRoute role={undefined}>
        <Toaster />
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
