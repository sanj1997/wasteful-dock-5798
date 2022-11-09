
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
    <Navbar />
    <AllRoutes />
    <AdminDashboard/>
    </>
  );
}

export default App;
