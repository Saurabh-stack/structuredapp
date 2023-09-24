import LoginPage from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Routes/PrivateRoute";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import Decisions from "./pages/Decisions";
import NewHieringDetails from "./features/DecisionInfo/components/NewHieringDetails";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <div className="mt-20">
      <Routes>
        {/*
         *  Temporary added Login Route before Protected route.
         *  Should be removed once Login backend and useAuth is completed.
         */}
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" exact element={<DashboardPage />} />
          <Route path="/dashboard" exact element={<DashboardPage />} />
          <Route path="/decision/:decisionId" exact element={<Decisions />} />
          <Route path="/hire/:hireId" exact element={<NewHieringDetails />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
