

import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import CartModal from "./components/CartModal";
import Address from "./pages/Address";

function App() {
  return (
    <>
    <Navbar />
    <AllRoutes />
    <AdminDashboard/>
     <CartModal />
     <Address/>
    </>
  );
}

export default App;
