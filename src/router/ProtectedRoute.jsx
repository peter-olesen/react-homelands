import { Navigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const ProtectedRoute = ({ children }) => {
  const { userData } = useContext(UserContext);
  if (!userData) {
    return <Navigate to="/" replace />;
  }

  return children;
};
