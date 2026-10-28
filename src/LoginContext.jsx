
import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
  );

  const login = (data) => {
    localStorage.setItem("user", data);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isLoggedIn = user ? true : false;

  return (
    <LoginContext.Provider
      value={{ user, login, logout, isLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};
