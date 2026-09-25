import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Calender from "../assets/Calendar-img-1.png";

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

const calendarBars = [
  {
    title: "Design Conference",
    start: new Date(2019, 9, 3),
    end: new Date(2019, 9, 3),
    color: "purple",
    image: Calender,
    subtitle: "Zillul Design Agency",
    time: "Today 07:19 AM",
    address: "56 Davion Mission Suite 157",
    avatars: [
      "https://i.pravatar.cc/40?img=12",
      "https://i.pravatar.cc/40?img=13",
      "https://i.pravatar.cc/40?img=14",
    ],
    moreCount: 15,
  },
  {
    title: "Weekend Festival",
    start: new Date(2019, 9, 16),
    end: new Date(2019, 9, 16),
    color: "pink",
    image: Calender,
    subtitle: "Sweden",
    time: "16 October 2019 at 5.00 PM",
    address: "853 Moore Flats Suite 158",
    avatars: [
      "https://i.pravatar.cc/40?img=15",
      "https://i.pravatar.cc/40?img=16",
      "https://i.pravatar.cc/40?img=17",
    ],
    moreCount: 20,
  },
  {
    title: "Glastonbury Festival",
    start: new Date(2019, 9, 20),
    end: new Date(2019, 9, 22),
    color: "orange",
    image: Calender,
    subtitle: "Turks and Caicos Islands",
    time: "20-22 October 2019 at 8.00 PM",
    address: "646 Walter Road Apt. 571",
    avatars: [
      "https://i.pravatar.cc/40?img=18",
      "https://i.pravatar.cc/40?img=19",
      "https://i.pravatar.cc/40?img=20",
    ],
    moreCount: 14,
  },
  {
    title: "Glastonbury Festival",
    start: new Date(2019, 9, 25),
    end: new Date(2019, 9, 25),
    color: "blue",
    image: Calender,
    subtitle: "Turks and Caicos Islands",
    time: "25 October 2019 at 8.00 PM",
    address: "646 Walter Road Apt. 571",
    avatars: [
      "https://i.pravatar.cc/40?img=18",
      "https://i.pravatar.cc/40?img=19",
      "https://i.pravatar.cc/40?img=20",
    ],
    moreCount: 14,
  },
];

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

  const [popup, setPopup] = useState(null);

  function openEventPopup(e, bar) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cardWidth = 320;

    // Card right edge screen-ah thaandi pogama irukka, konjam adjust pannurom
    let left = rect.left;
    if (left + cardWidth > window.innerWidth - 16) {
      left = window.innerWidth - cardWidth - 16;
    }

    setPopup({ bar, top: rect.bottom + 8, left });
  }

  const weeks = getMonthGrid(viewYear, viewMonth);

  function goToday() {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    setPopup(null);
  }
  function goPrevMonth() {
    setPopup(null);
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  }
  function goNextMonth() {
    setPopup(null);
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  }

  return (
    <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 p-5 overflow-hidden">
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
        // Day/Week view ithu
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

                {bars.map((bar, i) => (
                  <button
                    key={`${bar.title}-${i}-${weekIndex}`}
                    onClick={(e) => openEventPopup(e, bar)}
                    className={`text-left mx-1 mb-1 px-3 py-1.5 rounded-md text-xs font-semibold border-l-4 truncate hover:brightness-95 transition-all ${colorStyles[bar.color].border} ${colorStyles[bar.color].bg} ${colorStyles[bar.color].text}`}
                    style={{
                      gridColumn: `${bar.startCol} / ${bar.endCol + 1}`,
                      gridRow: i + 2,
                    }}
                  >
                    {bar.title}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {popup && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setPopup(null)} />
          <div
            className="fixed z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            style={{ top: popup.top, left: popup.left }}
          >
            <img
              src={popup.bar.image}
              alt={popup.bar.title}
              className="w-full h-36 object-cover"
            />

            <div className="p-4">
              <p className="font-bold text-gray-900">{popup.bar.title}</p>
              <p className="text-sm text-gray-500 mt-1">{popup.bar.subtitle}</p>
              <p className="text-sm text-gray-500 mt-2">{popup.bar.time}</p>
              <p className="text-sm text-gray-500">{popup.bar.address}</p>

              {/* Attendee avatars + "+N" badge - EventsPanel-la panna maadhiri pattern than */}
              <div className="flex items-center -space-x-2 mt-3">
                {popup.bar.avatars.slice(0, 3).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-[10px] font-semibold text-blue-600 ml-1">
                  {popup.bar.moreCount}+
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
