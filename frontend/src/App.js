
import CartModal from "./components/CartModal";
import FooterList from "./components/Footer/FooterList";
import LowerFooter from "./components/Footer/LowerFooter";
import UpperFooter from "./components/Footer/UpperFooter";
import UpperLowerFooter from "./components/Footer/UpperLowerFooter";
import Address from "./pages/Address";
import OrderConfirm from "./pages/OrderConfirm";
import Payment from "./pages/Payment";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <AllRoutes />
      {/* <UpperFooter />
      <FooterList />
      <UpperLowerFooter />
      <LowerFooter /> */}
    </div>
  );
}

export default App;
