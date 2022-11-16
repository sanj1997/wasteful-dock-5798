
import AdminDashboard from "./pages/AdminDashboard";
import CartModal from "./components/CartModal";
import Address from "./pages/Address";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Box } from "@chakra-ui/react";
import Otpverify from "./pages/Otpverify";
import AddUser from "./pages/AddUser";
import SignIn from "./pages/SignIn";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
