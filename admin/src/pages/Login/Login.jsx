import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Beautiva from '../../assets/pngs/Beautiva_logo.png';
// import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });
//   const [err, setErr] = useState(null);

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   const { login } = useContext(AuthContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(inputs);
//       navigate("/")
//     } catch (err) {
//       setErr(err.response.data);
//     }
//   };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <img src={Beautiva} alt="Beautiva" />
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
