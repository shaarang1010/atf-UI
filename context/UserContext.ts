import React, { createContext } from "react";

type ContextProps = {
  username: string;
  email: string;
  isAuthenticated: boolean;
};

const UserContext = createContext<ContextProps>({ username: "", email: "", isAuthenticated: false });

export default UserContext;
