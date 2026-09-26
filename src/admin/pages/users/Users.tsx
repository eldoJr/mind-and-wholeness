import { motion } from "framer-motion";
import { Users as UsersIcon, UserPlus } from "lucide-react";

const Users = () => (
  <div className="space-y-6 max-w-5xl">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Management</p>
      <h2 className="font-serif text-3xl font-semibold text-gray-800">Users</h2>
      <p className="text-sm text-gray-400 mt-1">Manage registered members and roles.</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
            <UsersIcon size={15} className="text-primary" />
          </div>
          <p className="font-serif text-base font-semibold text-gray-800">All Users</p>
        </div>
        <button className="inline-flex items-center gap-1.5 text-xs bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition">
          <UserPlus size={13} /> Add User
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-14 gap-3">
        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <UsersIcon size={26} className="text-primary/40" />
        </div>
        <p className="text-sm font-medium text-gray-500">No users yet</p>
        <p className="text-xs text-gray-400">User management will appear here once connected.</p>
      </div>
    </motion.div>
  </div>
);

export default Users;
