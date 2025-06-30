/* eslint-disable */
// TODO: fix eslint errors
import type { UserWithHierarchy } from "@/utils";
import { createContext, useState } from "react";


export interface User {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  photo?: string
  managerId?: number | null;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  users: UserWithHierarchy[] | null;
  setUsers: React.Dispatch<React.SetStateAction<UserWithHierarchy[] | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
  user: null,
  setUser: () => { },
  users: null,
  setUsers: () => { },
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<UserWithHierarchy[] | null>(null);
  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, users, setUsers }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;