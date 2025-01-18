import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import { useEffect } from "react";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/auth");
    }
    if (!isAuthorized && !isLoading) {
      navigate("/forbidden",{replace:true});
    }
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );
  }
  if (isAuthenticated && isAuthorized) return children;
}
export default ProtectedRoute;
