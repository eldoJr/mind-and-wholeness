import { Bell } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";

const AdminHeader = () => {
  const { adminUser } = useAdmin();
  const initials = adminUser?.full_name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() ?? "A";

  return (
    <header className="h-14 bg-white/70 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-6">
      <p className="text-sm text-gray-400 font-sans">
        {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
      </p>

      <div className="flex items-center gap-3">
        {/* Bell */}
        <button className="relative p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-semibold">
            {initials}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-gray-700 leading-tight">{adminUser?.full_name ?? "Admin"}</p>
            <p className="text-[10px] text-gray-400 capitalize">{adminUser?.role?.replace("_", " ")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
