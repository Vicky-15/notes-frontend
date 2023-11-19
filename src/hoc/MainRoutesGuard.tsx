import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

const MainRoutesGuard = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", {
        replace: true,
      });
    }
  }, [isLoggedIn, navigate, location]);

  return children;
};

export default MainRoutesGuard;
