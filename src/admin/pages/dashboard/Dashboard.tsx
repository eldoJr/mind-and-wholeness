import { motion } from "framer-motion";
import { Users, FileText, CalendarDays, Mic2, BookOpen, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";

const stats: { title: string; value: string; description: string; icon: ComponentType<{ size?: number; className?: string }> }[] = [
  { title: "Total Users", value: "—", description: "Registered members", icon: Users },
  { title: "Articles", value: "—", description: "Published", icon: FileText },
  { title: "Events", value: "—", description: "Upcoming", icon: CalendarDays },
  { title: "Podcasts", value: "—", description: "Episodes", icon: Mic2 },
];

const quickActions = ["Add Article", "Create Event", "Upload Podcast", "Add Course"];

const Dashboard = () => (
  <div className="space-y-6 max-w-5xl">
    {/* Header */}
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Overview</p>
      <h2 className="font-serif text-3xl font-semibold text-gray-800">Dashboard</h2>
      <p className="text-sm text-gray-400 mt-1">Welcome back — here's what's happening.</p>
    </motion.div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ title, value, description, icon: Icon }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-5 flex items-start gap-4"
        >
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{title}</p>
            <p className="text-2xl font-serif font-semibold text-gray-800 mt-0.5">{value}</p>
            <p className="text-xs text-gray-400 mt-0.5">{description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Panels */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
            <TrendingUp size={15} className="text-primary" />
          </div>
          <p className="font-serif text-base font-semibold text-gray-800">Recent Activity</p>
        </div>
        <div className="flex flex-col items-center justify-center py-8 gap-2">
          <BookOpen size={28} className="text-gray-200" />
          <p className="text-sm text-gray-400">No recent activity yet.</p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.38 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText size={15} className="text-primary" />
          </div>
          <p className="font-serif text-base font-semibold text-gray-800">Quick Actions</p>
        </div>
        <div className="space-y-2">
          {quickActions.map((action) => (
            <button
              key={action}
              className="w-full text-left text-sm px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary/5 hover:text-primary text-gray-500 transition flex items-center gap-2"
            >
              <span className="text-primary font-semibold">+</span> {action}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Dashboard;
