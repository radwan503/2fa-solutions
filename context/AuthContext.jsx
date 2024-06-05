"use client"
import { createContext } from "react";

const initialState = {

}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {

 const login = () => {

 }
 return (
  <AuthContext.Provider value={{ login }}>
   {children}
  </AuthContext.Provider>
 );
}

