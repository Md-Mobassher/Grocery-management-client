import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  TUser,
  logout,
  selectCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  role?: string; // Make role optional
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);
  const dispatch = useAppDispatch();
  const location = useLocation(); // Get the current location
  let user: TUser | undefined;

  if (token) {
    user = verifyToken(token as string) as TUser;
  }

  // If the user role doesn't match, log out and navigate to login
  if (role !== undefined && role !== (user?.role as string)) {
    dispatch(logout());
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location }} // Pass the location user tried to access
      />
    );
  }

  // If no token is found, redirect to login
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location }} // Pass the location user tried to access
      />
    );
  }

  return children;
};

export default ProtectedRoute;
