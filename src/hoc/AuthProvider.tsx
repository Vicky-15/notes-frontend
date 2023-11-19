import React, { createContext, useState, ReactNode, useEffect } from "react";
import { handleApiClientToken } from "../services/handleApiClientToken";
import Loader from "../components/Loader";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import useToastCustom from "../hooks/useToastCustom";

interface AuthContextProps {
  isLoggedIn: boolean;
  isInitialized: boolean;
  register: () => void;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const userAuthToken = localStorage.getItem("userAuthToken") as string;

interface TokenValidationResponse {
  validToken: boolean;
}

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { callToast } = useToastCustom();

  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [isInitialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (userAuthToken) {
      handleApiClientToken(userAuthToken);

      // check valid token and decide allow or logout
      apiClient
        .get<TokenValidationResponse>("/tokenValidation")
        .then(({ data: { validToken } }) => {
          if (validToken) {
            //allow login
            setLoggedIn(true);
            setInitialized(true);
          } else {
            // logout and go
            setLoggedIn(false);
            setInitialized(true);
            handleApiClientToken(null);
            callToast("info", "Last Session Expired, Login Again !");
          }
        })
        .catch((error) => {
          if (error instanceof CanceledError) {
            console.log("cancelled");
            // put an red notification with the message
            return;
          }
          console.log((error as AxiosError).message);
          // put an red notification with the message
        });
    } else {
      // setLoggedIn(true);
      setLoggedIn(false);
      setInitialized(true);
    }
  }, []);

  const register = () => {
    // Your register logic here
  };

  const login = () => {
    // Your login logic here
    setLoggedIn(true);
    setInitialized(true);
  };

  const logout = () => {
    // Your logout logic here
    setLoggedIn(false);
    setInitialized(true);
  };

  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isInitialized, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
