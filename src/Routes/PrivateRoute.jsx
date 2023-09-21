import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { status, isManager, isHR, isEmployee } = useAuth();
  const access = isManager || isHR;
  if (access) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
