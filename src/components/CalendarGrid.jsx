import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDayLabels = ["MON", "TUE", "WED", "THE", "FRI", "SAT", "SUN"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Event bars-oda color - Tailwind class name build panna, oru object-la vachurukom.
// "border" andha idathula colored strip (event start pannuriya idam kaatuvom),
// "bg"/"text" - andha bar-oda background/text color.
const colorStyles = {
  purple: {
    border: "border-purple-600",
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  pink: { border: "border-pink-500", bg: "bg-pink-100", text: "text-pink-700" },
  orange: {
    border: "border-orange-500",
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
  blue: { border: "border-blue-600", bg: "bg-blue-100", text: "text-blue-700" },
};

// Calendar-la mattum kaatura bars - list panel-oda data vera, ithu vera.
// (Glastonbury Festival rendu murai kaatirukom - 20-22 main event, 25-ku oru chinna continuation,
// design screenshot-la irundha maadhiri)
const calendarBars = [
  {
    title: "Design Conference",
    start: new Date(2019, 9, 3),
    end: new Date(2019, 9, 3),
    color: "purple",
  },
  {
    title: "Weekend Festival",
    start: new Date(2019, 9, 16),
    end: new Date(2019, 9, 16),
    color: "pink",
  },
  {
    title: "Glastonbury Festival",
    start: new Date(2019, 9, 20),
    end: new Date(2019, 9, 22),
    color: "orange",
  },
  {
    title: "Glastonbury Festival",
    start: new Date(2019, 9, 25),
    end: new Date(2019, 9, 25),
    color: "blue",
  },
];

// Oru month-ku, Monday-la start aagura 6-week (42 day) grid create pannurom.
// Ithu getCalendarDays maadhiri thaan, aana Sunday pathila Monday-la start aagum.
function getMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const jsDay = firstOfMonth.getDay(); // 0 = Sunday
  const mondayOffset = (jsDay + 6) % 7; // 0 = Monday
  const startDate = new Date(year, month, 1 - mondayOffset);

  const weeks = [];
  let current = new Date(startDate);
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

function diffDays(a, b) {
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Oru week (7 dates) ku, andha week-la overlap aagura events ah kandupidichu,
// ovvoru event-kum "எந்த column-la start aaganum, எந்த column-la mudiyanum" nu calculate pannurom
function getEventBarsForWeek(week) {
  const weekStart = week[0];
  const weekEnd = week[6];

  return calendarBars
    .filter((ev) => ev.end >= weekStart && ev.start <= weekEnd)
    .map((ev) => {
      const clippedStart = ev.start < weekStart ? weekStart : ev.start;
      const clippedEnd = ev.end > weekEnd ? weekEnd : ev.end;
      return {
        ...ev,
        startCol: diffDays(weekStart, clippedStart) + 1,
        endCol: diffDays(weekStart, clippedEnd) + 1,
      };
    });
}

export default function CalendarGrid() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [activeView, setActiveView] = useState("Month");

  const weeks = getMonthGrid(viewYear, viewMonth);

  function goToday() {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
  }
  function goPrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  }
  function goNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  }

  return (
    <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 p-5 overflow-hidden">
      {/* Top controls */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <button
          onClick={goToday}
          className="text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          Today
        </button>

        <div className="flex items-center gap-3 mx-auto">
          <button
            onClick={goPrevMonth}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <ChevronLeft size={18} className="text-gray-500" />
          </button>
          <p className="text-xl font-bold text-gray-900 w-48 text-center">
            {monthNames[viewMonth]} {viewYear}
          </p>
          <button
            onClick={goNextMonth}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <ChevronRight size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Day/Week/Month toggle */}
        <div className="flex items-center bg-gray-50 rounded-xl p-1">
          {["Day", "Week", "Month"].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeView === view
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {activeView !== "Month" ? (
        // Day/Week view ithu simple version - full calendar build pannala, chinna note kaatirukom
        <div className="py-24 text-center text-gray-400">
          {activeView} view - coming soon. "Month" tab-ah click pannunga full
          calendar paakka.
        </div>
      ) : (
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          {/* Week day header row */}
          <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
            {weekDayLabels.map((label) => (
              <div
                key={label}
                className="px-4 py-3 text-xs font-bold text-gray-500 text-center sm:text-left"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Weeks */}
          {weeks.map((week, weekIndex) => {
            const bars = getEventBarsForWeek(week);
            return (
              <div
                key={weekIndex}
                className="grid grid-cols-7 border-b border-gray-50 last:border-0 relative"
                style={{
                  gridTemplateRows: `auto repeat(${Math.max(bars.length, 0)}, auto)`,
                  minHeight: "90px",
                }}
              >
                {week.map((date, dayIndex) => {
                  const inMonth = date.getMonth() === viewMonth;
                  const isToday = isSameDay(date, today);
                  return (
                    <div
                      key={dayIndex}
                      className={`px-3 py-2 border-r border-gray-50 last:border-r-0 text-right ${
                        !inMonth
                          ? "bg-[repeating-linear-gradient(45deg,#F8FAFC,#F8FAFC_6px,#F1F5F9_6px,#F1F5F9_12px)]"
                          : ""
                      }`}
                      style={{ gridColumn: dayIndex + 1, gridRow: 1 }}
                    >
                      <span
                        className={`text-sm ${
                          !inMonth
                            ? "text-gray-300"
                            : isToday
                              ? "inline-flex w-7 h-7 items-center justify-center rounded-full bg-blue-600 text-white font-semibold"
                              : "text-gray-800 font-medium"
                        }`}
                      >
                        {date.getDate()}
                      </span>
                    </div>
                  );
                })}

                {/* Event bars - correct column span-la potrom, ovvoru bar-um vera vera row-la (mela mela stack aagum) */}
                {bars.map((bar, i) => (
                  <div
                    key={`${bar.title}-${i}`}
                    className={`mx-1 mb-1 px-3 py-1.5 rounded-md text-xs font-semibold border-l-4 truncate ${colorStyles[bar.color].border} ${colorStyles[bar.color].bg} ${colorStyles[bar.color].text}`}
                    style={{
                      gridColumn: `${bar.startCol} / ${bar.endCol + 1}`,
                      gridRow: i + 2,
                    }}
                  >
                    {bar.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
