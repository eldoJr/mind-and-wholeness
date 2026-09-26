import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, FileText, Settings, LogOut, BookOpen, Mic2, BookMarked, Newspaper } from "lucide-react";
import logo from "../../../assets/icons/logo-icon.png";

const links = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/content", label: "Content", icon: FileText },
  { to: "/admin/articles/add", label: "Add Article", icon: Newspaper },
  { to: "/admin/courses/add", label: "Add Course", icon: BookOpen },
  { to: "/admin/podcasts/add", label: "Add Podcast", icon: Mic2 },
  { to: "/admin/books/add", label: "Add Book", icon: BookMarked },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

const AdminSidebar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("admin_authed");
    window.location.href = "/admin";
  };

  return (
    <aside className="w-64 bg-white/70 backdrop-blur-xl border-r border-gray-100 flex flex-col">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 h-14 border-b border-gray-100 shrink-0">
        <img src={logo} alt="Logo" className="h-9 w-auto" />
        <div>
          <p className="font-serif text-sm font-semibold text-gray-800 leading-tight">Mind & Wholeness</p>
          <p className="text-[10px] text-gray-400 tracking-widest uppercase">Admin</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={16} className={isActive ? "text-primary" : "text-gray-400"} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-150"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
