import { useState } from "react";
import {
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
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

function getCalendarDays(year, month) {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const days = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, inCurrentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      day: d,
      inCurrentMonth: true,
      dateKey: `${year}-${month}-${d}`,
    });
  }
  let nextDay = 1;
  while (days.length < 42) {
    days.push({ day: nextDay, inCurrentMonth: false });
    nextDay++;
  }
  return days;
}

// ===================== Date Filter Dropdown =====================
// selected -> parent (OrderFilterBar) la irundhu current selected dates array varum
// onApply -> "Apply Now" click pannina, puthu dates array ah parent-ku kudukkurathukku
function DateFilterDropdown({ selected, onApply }) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [draft, setDraft] = useState(selected);

  const days = getCalendarDays(viewYear, viewMonth);

  function handleOpen() {
    setDraft(selected); // open pannumbodhu, already select panna dates ah draft-la load pannurom
    setOpen((prev) => !prev);
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
  function toggleDate(dateKey) {
    setDraft((prev) =>
      prev.includes(dateKey)
        ? prev.filter((d) => d !== dateKey)
        : [...prev, dateKey],
    );
  }
  function handleApply() {
    onApply(draft);
    setOpen(false);
  }
  const buttonLabel =
    selected.length === 0
      ? "Date"
      : selected.length === 1
        ? formatDateKey(selected[0])
        : `${selected.length} dates selected`;

  return (
    <div className="relative border-t sm:border-t-0 sm:border-l border-gray-100 w-full sm:w-auto">
      <button
        onClick={handleOpen}
        className="flex items-center justify-between gap-14 px-5 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 w-full"
      >
        {buttonLabel}
        <ChevronDown size={18} className="text-black shrink-0" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-80 max-w-[90vw]">
            <div className="flex items-center justify-between mb-4">
              <p className="font-bold text-gray-900">
                {monthNames[viewMonth]} {viewYear}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrevMonth}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <ChevronLeft size={16} className="text-gray-600" />
                </button>
                <button
                  onClick={goNextMonth}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 mb-2">
              {weekDays.map((d, i) => (
                <div
                  key={i}
                  className="text-center text-xs font-medium text-gray-400 py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1">
              {days.map((item, i) => {
                const isSelected =
                  item.inCurrentMonth && draft.includes(item.dateKey);
                return (
                  <button
                    key={i}
                    disabled={!item.inCurrentMonth}
                    onClick={() =>
                      item.inCurrentMonth && toggleDate(item.dateKey)
                    }
                    className={`w-9 h-9 mx-auto rounded-full text-sm flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white font-semibold"
                        : item.inCurrentMonth
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-300 cursor-default"
                    }`}
                  >
                    {item.day}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 mt-4">
              *You can choose multiple date
            </p>

            <button
              onClick={handleApply}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl mt-4 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// "2019-8-4" (year-month-day, month 0-indexed) -> "04 Sep 2019" mathiri readable text
function formatDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    +"Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${String(day).padStart(2, "0")} ${shortMonths[month]} ${year}`;
}

function PillMultiSelectDropdown({
  label,
  popupTitle,
  options,
  selected,
  onApply,
  noteText,
}) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(selected);

  function handleOpen() {
    setDraft(selected);
    setOpen((prev) => !prev);
  }

  function togglePill(option) {
    setDraft((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    );
  }

  function handleApply() {
    onApply(draft);
    setOpen(false);
  }

  const buttonLabel =
    selected.length === 0
      ? label
      : selected.length === 1
        ? selected[0]
        : `${selected.length} selected`;

  return (
    <div className="relative border-t sm:border-t-0 sm:border-l border-gray-100 w-full sm:w-auto">
      <button
        onClick={handleOpen}
        className="flex items-center justify-between gap-14 px-5 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 w-full truncate"
      >
        <span className="truncate">{buttonLabel}</span>
        <ChevronDown size={20} className="text-black shrink-0" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-[420px] max-w-[90vw]">
            <p className="font-bold text-gray-900 mb-4">{popupTitle}</p>

            {/* Pill buttons - flex-wrap potradhaala, screen size-ku thakka rows automatic ah adjust aagum */}
            <div className="flex flex-wrap gap-3">
              {options.map((option) => {
                const isSelected = draft.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => togglePill(option)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 mt-5 pt-4 border-t border-gray-50">
              {noteText}
            </p>

            <button
              onClick={handleApply}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl mt-4 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export const orderTypeOptions = [
  "Health & Medicine",
  "Book & Stationary",
  "Services & Industry",
  "Fashion & Beauty",
  "Home & Living",
  "Electronics",
  "Mobile & Phone",
  "Accessories",
];
export const orderStatusOptions = [
  "Completed",
  "Processing",
  "Rejected",
  "On Hold",
  "In Transit",
];

// filters, onFilterChange - parent (OrderLists.jsx) la irundhu varum.

export default function OrderFilterBar({ filters, onFilterChange }) {
  function handleReset() {
    onFilterChange({ dates: [], orderTypes: [], orderStatuses: [] });
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl border border-gray-100 w-full">
      <div className="flex items-center gap-2 px-5 py-4 sm:py-0">
        <Filter size={18} className="text-gray-400" />
        <span className="sm:hidden text-sm font-medium text-gray-700">
          Filter By
        </span>
      </div>

      <div className="hidden sm:flex items-center px-5 py-4 text-sm font-medium text-gray-700 border-l border-gray-100">
        Filter By
      </div>

      <DateFilterDropdown
        selected={filters.dates}
        onApply={(dates) => onFilterChange({ ...filters, dates })}
      />

      <PillMultiSelectDropdown
        label="Order Type"
        popupTitle="Select Order Type"
        options={orderTypeOptions}
        selected={filters.orderTypes}
        onApply={(orderTypes) => onFilterChange({ ...filters, orderTypes })}
        noteText="*You can choose multiple Order type"
      />

      <PillMultiSelectDropdown
        label="Order Status"
        popupTitle="Select Order Status"
        options={orderStatusOptions}
        selected={filters.orderStatuses}
        onApply={(orderStatuses) =>
          onFilterChange({ ...filters, orderStatuses })
        }
        noteText="*You can choose multiple Order status"
      />

      <button
        onClick={handleReset}
        className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-red-500 border-t sm:border-t-0 sm:border-l border-gray-100 hover:bg-red-50 w-full sm:w-auto sm:shrink-0"
      >
        <RotateCcw size={16} />
        Reset Filter
      </button>
    </div>
  );
}
