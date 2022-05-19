import React, { createContext } from "react";

type ContextProps = {
  username: string;
  setUserName: (username: string) => any;
  email: string;
  isAuthenticated: boolean;
  setIsAuthenticated: (user: boolean) => any;
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
