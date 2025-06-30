import { Routes, Route, BrowserRouter, Navigate } from "react-router";
import Home from "@/Pages/Home";
import Login from "@/Pages/Login";
import { useAuthContext } from "@/Contexts/Auth/useAuthContext";
import "@/App.css";

const AppRoutes = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
