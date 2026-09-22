import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { name: "5k", sales: 22, profit: 24 },
  { name: "8k", sales: 25, profit: 45 },
  { name: "10k", sales: 28, profit: 68 },
  { name: "13k", sales: 26, profit: 40 },
  { name: "15k", sales: 24, profit: 28 },
  { name: "18k", sales: 22, profit: 30 },
  { name: "20k", sales: 22, profit: 32 },
  { name: "22k", sales: 30, profit: 45 },
  { name: "25k", sales: 55, profit: 42 },
  { name: "28k", sales: 30, profit: 55 },
  { name: "30k", sales: 30, profit: 32 },
  { name: "33k", sales: 55, profit: 30 },
  { name: "35k", sales: 90, profit: 28 },
  { name: "38k", sales: 55, profit: 30 },
  { name: "40k", sales: 32, profit: 55 },
  { name: "42k", sales: 45, profit: 40 },
  { name: "45k", sales: 68, profit: 32 },
  { name: "48k", sales: 55, profit: 30 },
  { name: "50k", sales: 70, profit: 28 },
  { name: "53k", sales: 45, profit: 30 },
  { name: "55k", sales: 30, profit: 35 },
  { name: "58k", sales: 50, profit: 68 },
  { name: "60k", sales: 60, profit: 90 },
];

function LegendDot({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Revenue</h2>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 outline-none">
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>

      <div className="w-full h-[280px] sm:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 30, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[20, "dataMax + 15"]}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#c8b8e4"
              strokeWidth={2}
              fill="#c8b8e4"
              fillOpacity={1}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#ec9464"
              strokeWidth={2}
              fill="#ec9464"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-8 justify-center mt-2">
        <LegendDot color="#ec9464" label="Sales" />
        <LegendDot color="#c8b8e4" label="Profit" />
      </div>
    </div>
  );
}
