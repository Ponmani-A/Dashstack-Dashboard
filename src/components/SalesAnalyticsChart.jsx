import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const analyticsData = [
  { year: "2015", line1: 22, line2: 5 },
  { year: "2015.5", line1: 45, line2: 25 },
  { year: "2016", line1: 72, line2: 55 },
  { year: "2016.5", line1: 55, line2: 45 },
  { year: "2017", line1: 48, line2: 30 },
  { year: "2017.5", line1: 45, line2: 22 },
  { year: "2018", line1: 50, line2: 28 },
  { year: "2018.5", line1: 62, line2: 45 },
  { year: "2019", line1: 92, line2: 78 },
];

function DotWithGap({ cx, cy, color }) {
  return (
    <g>
      {/* Halo - line ah moodi, gap illusion create pannurathu */}
      <circle cx={cx} cy={cy} r={7} fill="#fff" />
      {/* Real dot - halo mேலе */}
      <circle cx={cx} cy={cy} r={3.5} fill={color} />
    </g>
  );
}

export default function SalesAnalyticsChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Sales Analytics</h2>

      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={analyticsData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis
              dataKey="year"
              ticks={["2015", "2016", "2017", "2018", "2019"]}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />

            <Line
              type="monotone"
              dataKey="line1"
              stroke="#3B82F6"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "#3B82F6" }}
            />

            <Line
              type="monotone"
              dataKey="line2"
              stroke="#10B981"
              strokeWidth={2.5}
              dot={(props) => (
                <DotWithGap
                  key={props.key}
                  cx={props.cx} // x position
                  cy={props.cy} // y position
                  color="#10B981"
                />
              )}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
