import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem("token");
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
