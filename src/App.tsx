import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <ProtectedRoute role={undefined}>
        <Toaster />
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
