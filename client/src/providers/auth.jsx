import React, { useState } from "react";
import { useEffect } from "react";

export const AuthContext = React.createContext({});

 const AuthProvider = (props) => {


  const [user, setUSer] = useState({
    name: "John",
  })

useEffect(() => {
  const userStorage = localStorage.getItem('user');
  if(userStorage) {
    setUSer( JSON.parse(userStorage));

  }else {
    setUSer({
      name: "",
    });
  };
},[]);

  return (
    <AuthContext.Provider value={{ user, setUSer }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext)