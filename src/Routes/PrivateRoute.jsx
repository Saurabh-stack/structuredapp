import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const access = true;

  if (access) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
