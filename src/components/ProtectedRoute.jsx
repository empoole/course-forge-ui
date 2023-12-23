import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { authState } = useAuth();

  useEffect(() => {
    if (!authState.jwt) {
      navigate("/login");
    }
  }, [navigate, authState]);

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProtectedRoute;
