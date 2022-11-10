

import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import CartModal from "./components/CartModal";
import Address from "./pages/Address";
import OrderConfirm from "./pages/OrderConfirm";
import Payment from "./pages/Payment";
import AllRoutes from "./routes/AllRoutes";

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
