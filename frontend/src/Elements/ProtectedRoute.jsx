import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("logined") === "true";
  return isLoggedIn ? children : <Navigate to="/adminlogin" />;
}

export default ProtectedRoute;
