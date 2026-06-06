"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface AdminContext {
  adminNavigation: string;
  setAdminNavigation: Dispatch<SetStateAction<string>>;
}

const AdminContext = createContext<AdminContext | null>(null);

export default function AdminProvider({ children }: { children: ReactNode }) {
  const [adminNavigation, setAdminNavigation] = useState("PRODUCTS");  

  return <AdminContext.Provider value={{ adminNavigation, setAdminNavigation }}>{children}</AdminContext.Provider>
}

export const useAdminContext = () => {
  const context = useContext(AdminContext);

  if (!context) throw new Error("Make sure this component exists in the AdminProvider tree");
  return context;
}