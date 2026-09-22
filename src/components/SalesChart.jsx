import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const salesData = [
  { name: "5k", value: 20 },
  { name: "8k", value: 26 },
  { name: "10k", value: 45 },
  { name: "13k", value: 30 },
  { name: "15k", value: 32 },
  { name: "18k", value: 48 },
  { name: "20k", value: 86.67 },
  { name: "22k", value: 30 },
  { name: "25k", value: 50 },
  { name: "28k", value: 48 },
  { name: "30k", value: 55 },
  { name: "33k", value: 60 },
  { name: "35k", value: 25 },
  { name: "38k", value: 28 },
  { name: "40k", value: 45 },
  { name: "42k", value: 72 },
  { name: "45k", value: 62 },
  { name: "48k", value: 65 },
  { name: "50k", value: 55 },
  { name: "53k", value: 60 },
  { name: "55k", value: 42 },
  { name: "58k", value: 58 },
  { name: "60k", value: 55 },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg">
        {payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
}

export default function SalesChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Sales Details</h2>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 outline-none">
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>

      <div className="w-full h-[280px] sm:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesData} // data va chart ku kudukurom
            margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* vertical line vendam  */}
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2.5}
              fill="url(#salesFill)"
              dot={{ r: 4, fill: "#3B82F6", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
