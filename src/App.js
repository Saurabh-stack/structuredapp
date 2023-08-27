import LoginPage from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Routes/PrivateRoute";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import Decisions from "./pages/Decisions";
const App = () => {
  return (
    <div className="mt-20">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" exact element={<DashboardPage />} />
          <Route path="/dashboard" exact element={<DashboardPage />} />
          <Route path="/decision/:decisionId" exact element={<Decisions />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
