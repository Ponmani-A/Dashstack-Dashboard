import { TrendingUp, TrendingDown } from "lucide-react";

// Ithu oru "reusable" card. 4 card layum design onnu thaan, data mattum vera.
// Adhunala, oru component eludhi, prop moolama data pass pannuvom.
//
// Props:
// title       -> "Total User" nu maadhiri text
// value       -> "40,689" nu maadhiri big number
// icon        -> lucide-react icon component
// iconBg      -> icon-oda background color class
// trend       -> "up" or "down"
// trendValue  -> "8.5%"
// trendText   -> "Up from yesterday"
export default function StatCard({
  title,
  value,
  icon: Icon,
  iconBg,
  trend,
  trendValue,
  trendText,
}) {
  const isUp = trend === "up";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">{title}</p>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
        >
          <Icon size={18} />
        </div>
      </div>

      <p className="text-3xl font-bold text-gray-900">{value}</p>

      <div className="flex items-center gap-1.5 text-sm">
        {isUp ? (
          <TrendingUp size={16} className="text-emerald-500" />
        ) : (
          <TrendingDown size={16} className="text-red-500" />
        )}
        <span
          className={
            isUp ? "text-emerald-500 font-medium" : "text-red-500 font-medium"
          }
        >
          {trendValue}
        </span>
        <span className="text-gray-400">{trendText}</span>
      </div>
    </div>
  );
}
