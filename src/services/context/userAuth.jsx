import React, { createContext, useContext, useState } from "react";

export const UserAuthContext = createContext(null);

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (data) => {
    setUser(data);
  };

  return (
    <UserAuthContext.Provider value={{ user, login }}>
      {children}
    </UserAuthContext.Provider>
  );
}
