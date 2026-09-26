import { createContext, useContext, type ReactNode } from "react";
import type { AdminUser } from "../types";

interface AdminContextType {
  adminUser: AdminUser | null;
}

const AdminContext = createContext<AdminContextType>({ adminUser: null });

export const AdminProvider = ({ children, adminUser }: { children: ReactNode; adminUser: AdminUser | null }) => (
  <AdminContext.Provider value={{ adminUser }}>{children}</AdminContext.Provider>
);

export const useAdmin = () => useContext(AdminContext);
