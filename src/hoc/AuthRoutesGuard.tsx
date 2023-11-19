import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

const AuthRoutesGuard = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // if (isLoggedIn) {
    //   navigate(location?.state?.from ? location?.state?.from : "/", {
    //     state: {
    //       from: "",
    //     },
    //     replace: true,
    //   });
    // }
  }, [isLoggedIn, navigate, location]);

  return children;
};

export default AuthRoutesGuard;
