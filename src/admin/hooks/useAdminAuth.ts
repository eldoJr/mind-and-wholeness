import { useAdmin } from "../context/AdminContext";

export const useAdminAuth = () => {
  const { adminUser } = useAdmin();
  return {
    isAdmin: !!adminUser,
    role: adminUser?.role ?? null,
    can: (role: string) => adminUser?.role === role,
  };
};
