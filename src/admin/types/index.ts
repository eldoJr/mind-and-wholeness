export type AdminRole = "super_admin" | "editor" | "moderator";

export interface AdminUser {
  id: string;
  email: string;
  role: AdminRole;
  full_name: string;
}
