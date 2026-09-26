import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AdminProvider } from "../../context/AdminContext";
import { CourseStoreProvider } from "../../context/CourseStore";
import { PodcastStoreProvider } from "../../context/PodcastStore";
import { BookStoreProvider } from "../../context/BookStore";
import { ArticleStoreProvider } from "../../context/ArticleStore";
import type { AdminUser } from "../../types";
import AdminLogin from "../../pages/login/AdminLogin";

const STATIC_ADMIN: AdminUser = {
  id: "static-admin",
  email: "admin",
  full_name: "Admin",
  role: "super_admin",
};

const AdminProtectedRoute = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("admin_authed") === "true");

  if (!authed) return <AdminLogin onSuccess={() => setAuthed(true)} />;

  return (
    <AdminProvider adminUser={STATIC_ADMIN}>
      <CourseStoreProvider>
        <PodcastStoreProvider>
          <BookStoreProvider>
            <ArticleStoreProvider>
              <Outlet />
            </ArticleStoreProvider>
          </BookStoreProvider>
        </PodcastStoreProvider>
      </CourseStoreProvider>
    </AdminProvider>
  );
};

export default AdminProtectedRoute;
