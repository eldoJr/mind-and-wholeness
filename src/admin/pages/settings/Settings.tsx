import { motion } from "framer-motion";
import { Settings as SettingsIcon, Lock, Bell, Globe } from "lucide-react";

const sections = [
  {
    icon: Lock,
    title: "Security",
    description: "Manage admin credentials and access.",
    action: "Change Password",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure email and in-app alerts.",
    action: "Configure",
  },
  {
    icon: Globe,
    title: "Site Settings",
    description: "Update site name, language, and metadata.",
    action: "Edit",
  },
];

const Settings = () => (
  <div className="space-y-6 max-w-5xl">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Configuration</p>
      <h2 className="font-serif text-3xl font-semibold text-gray-800">Settings</h2>
      <p className="text-sm text-gray-400 mt-1">Manage your admin portal preferences.</p>
    </motion.div>

    <div className="space-y-3">
      {sections.map(({ icon: Icon, title, description, action }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-5 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon size={17} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{description}</p>
            </div>
          </div>
          <button className="text-xs text-primary border border-primary/30 px-4 py-2 rounded-xl hover:bg-primary/5 transition shrink-0">
            {action}
          </button>
        </motion.div>
      ))}
    </div>

    {/* Admin info card */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.28 }}
      className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
          <SettingsIcon size={15} className="text-primary" />
        </div>
        <p className="font-serif text-base font-semibold text-gray-800">Admin Portal</p>
      </div>
      <div className="h-px bg-gray-100 mb-4" />
      <p className="text-xs text-gray-400 leading-relaxed">
        This portal is for internal use only. Authentication is currently static — Supabase role-based auth will be integrated in a future release.
      </p>
    </motion.div>
  </div>
);

export default Settings;
