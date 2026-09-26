import type { ComponentType } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  trend?: string;
}

const StatCard = ({ title, value, description, icon: Icon, trend }: StatCardProps) => (
  <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-5 flex items-start gap-4">
    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
      <Icon size={18} className="text-primary" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{title}</p>
      <p className="text-2xl font-serif font-semibold text-gray-800 mt-0.5">{value}</p>
      <div className="flex items-center gap-2 mt-1">
        {trend && <span className="text-xs text-emerald-500 font-medium">{trend}</span>}
        {description && <span className="text-xs text-gray-400">{description}</span>}
      </div>
    </div>
  </div>
);

export default StatCard;
