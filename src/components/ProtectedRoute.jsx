/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
    // if the user is authenticated or not, loaded or not, also to check location to know where are we connected
    const { isSignedIn, isLoaded, user } = useUser();
    const { pathname } = useLocation();

    if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate to="/?sign-in=true" />;
    }
    // onboarding status
    if (
        user !== undefined &&
        !user?.unsafeMetadata?.role &&
        pathname !== "/onboarding"
    )
        return <Navigate to="/onboarding" />;

    return children;
};

export default ProtectedRoute;