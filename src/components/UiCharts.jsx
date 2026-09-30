import { Fragment } from "react";
import {
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  ResponsiveContainer,
  YAxis,
} from "recharts";

function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-end">
        {children}
      </div>
    </div>
  );
}

// 4 different bar chart data sets
const toData = (values) => values.map((value, i) => ({ id: i, value }));

const blueBars = toData([100, 52, 38, 83, 66, 45, 56]);
const tealBars = toData([100, 60, 79, 82, 74, 90, 99]);
const mixedBars = toData([
  35, 51, 62, 74, 51, 67, 50, 59, 84, 100, 40, 48, 53, 64,
]);
const pinkBars = toData([100, 60, 79, 82, 74, 90, 99]);

// Ella 4 bar chart-kum ore skeleton - data, bar color/fill, bar size mattum vera.
// children - Cell-kal (alternate colors) venum-na anga pass pannalam.
// reusable bar chart component.
function MiniBarChart({ data, fill, barSize = 10, children, gradient }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="25%">
          {/* fade charts  gradient iruntha mattum  defs refer pannu */}
          {gradient && <defs>{gradient}</defs>}
          <YAxis hide domain={[0, 100]} />
          <Bar
            dataKey="value"
            fill={fill}
            barSize={barSize}
            radius={[8, 8, 8, 8]}
            isAnimationActive={false}
          >
            {children}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function StackGradient({ id, colors, stops }) {
  // stops = [0, 55, 75, 90, 100] -> colors[0] 0-55%, colors[1] 55-75%...
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      {colors.map((color, i) => (
        // ovvoru color kum 2 stop create pannuthu
        <Fragment key={i}>
          <stop offset={`${stops[i]}%`} stopColor={color} />
          <stop offset={`${stops[i + 1]}%`} stopColor={color} />
        </Fragment>
      ))}
    </linearGradient>
  );
}

export function BarChartSection() {
  return (
    <ChartCard title="Bar Chart">
      <MiniBarChart data={blueBars} fill="#4F86F7" barSize={12} />

      <MiniBarChart
        data={tealBars}
        fill="url(#tealStack)"
        gradient={
          <StackGradient
            id="tealStack"
            colors={["#D3F0FB", "#B7EBD9", "#1ECBB0", "#EEF0F4"]}
            stops={[0, 55, 75, 88, 100]}
          />
        }
      />

      {/* Alternate blue/orange - index-ku etha mathiri  Cell color maarum */}
      <MiniBarChart data={mixedBars} fill="#3D3DFF" barSize={9}>
        {mixedBars.map((bar, i) => (
          <Cell key={bar.id} fill={i % 2 === 0 ? "#3D3DFF" : "#FF8A00"} />
        ))}
      </MiniBarChart>

      <MiniBarChart
        data={pinkBars}
        fill="url(#pinkStack)"
        gradient={
          <StackGradient
            id="pinkStack"
            colors={["#FFE3EE", "#FFB6D5", "#FF8DBE", "#FF5FA2"]}
            stops={[0, 55, 75, 90, 100]}
          />
        }
      />
    </ChartCard>
  );
}

// ===================== PIE CHARTS =====================
// percent - colored slice evvalavu %, color - slice color,
// clockwise - false na, slice left side pakkam (counter-clockwise) vaarum
function MiniPie({ percent, color, clockwise = true }) {
  const data = [
    { name: "value", value: percent, color },
    { name: "rest", value: 100 - percent, color: "#E8EEFD" },
  ];

  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={clockwise ? -270 : 450}
            outerRadius="85%"
            stroke="none"
            isAnimationActive={false}
          >
            {data.map((slice) => (
              <Cell key={slice.name} fill={slice.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PieChartSection() {
  return (
    <ChartCard title="Pie Chart">
      <MiniPie percent={25} color="#4040FF" clockwise={false} />
      <MiniPie percent={25} color="#BB6BFF" />
      <MiniPie percent={38} color="#FF8848" />
      <MiniPie percent={40} color="#4194FF" clockwise={false} />
    </ChartCard>
  );
}

// ===================== DONUT CHARTS =====================
// segments - [{ value, color }] - ella slices-um serndhu 100 varanum
function MiniDonut({ segments }) {
  const data = segments.map((s, i) => ({ ...s, name: `s${i}` }));

  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Outer thick ring */}
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius="72%"
            outerRadius="95%"
            stroke="none"
            isAnimationActive={false}
          >
            {data.map((s) => (
              <Cell key={s.name} fill={s.color} />
            ))}
          </Pie>

          {/* Inner thin ring - same colors, light-ah (fillOpacity kammi) -
              screenshot-la irukra "double ring" look kaga */}
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius="60%"
            outerRadius="66%"
            stroke="none"
            isAnimationActive={false}
          >
            {data.map((s) => (
              <Cell key={s.name} fill={s.color} fillOpacity={0.45} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DonutChartSection() {
  return (
    <ChartCard title="Donut Chart">
      <MiniDonut
        segments={[
          { value: 50, color: "#1ECBB0" },
          { value: 50, color: "#E1E4EA" },
        ]}
      />
      <MiniDonut
        segments={[
          { value: 50, color: "#3F8CFF" },
          { value: 6, color: "#FF8848" },
          { value: 44, color: "#E1E4EA" },
        ]}
      />
      <MiniDonut
        segments={[
          { value: 50, color: "#1ECBB0" },
          { value: 4, color: "#3F8CFF" },
          { value: 46, color: "#FFD666" },
        ]}
      />
      <MiniDonut
        segments={[
          { value: 50, color: "#1ECBB0" },
          { value: 4, color: "#3F8CFF" },
          { value: 20, color: "#FF8848" },
          { value: 26, color: "#FFD666" },
        ]}
      />
    </ChartCard>
  );
}
