import React, { createContext } from "react";

type ContextProps = {
  username: string;
  setUserName(): void;
  email: string;
  isAuthenticated: boolean;
  setIsAuthenticated(): void;
};

const setUserName = () => {};
const setIsAuthenticated = () => {};

const UserContext = createContext<ContextProps>({
  username: "",
  email: "",
  isAuthenticated: false,
  setIsAuthenticated,
  setUserName
});

export default UserContext;
