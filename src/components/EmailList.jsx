import { useState } from "react";
import {
  Search,
  ArchiveRestore,
  Info,
  Trash2,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tagStyles = {
  Primary: "bg-emerald-100 text-emerald-600",
  Social: "bg-blue-100 text-blue-600",
  Work: "bg-orange-100 text-orange-600",
  Friends: "bg-purple-100 text-purple-600",
};

// emails, toggleStar, activeFolder - ellame parent (Inbox.jsx) la irundhu prop ah varum.
// "Starred" folder select pannirukom na, starred:true email mattum filter pannuvom,
// adhoda tag badge-um hide panuvom
export default function EmailList({
  emails,
  toggleStar,
  activeFolder,
  onOpenEmail,
}) {
  const isStarredView = activeFolder === "Starred";
  const visibleEmails = isStarredView
    ? emails.filter((email) => email.starred)
    : emails;

  // Checkbox click pannina, andha email-oda id ah "selectedIds" Set-la vachurukom.
  // Set use pannrom na, already select pannirkoma nu check pannа easy (`.has()`)
  const [selectedIds, setSelectedIds] = useState(new Set());

  function toggleSelect(id) {
    setSelectedIds((prev) => {
      // Prev set ah copy panrom
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id); // Already selected-ah irundha, remove pannumuncheck)
      } else {
        next.add(id); // Illana, add pannum(check)
      }
      return next;
    });
  }

  return (
    <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search mail"
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
          <ArchiveRestore size={17} className="text-gray-600" />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center">
          <Info size={17} className="text-white" />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
          <Trash2 size={17} className="text-gray-600" />
        </button>
      </div>

      <div className="divide-y divide-gray-50">
        {visibleEmails.map((email) => {
          const isSelected = selectedIds.has(email.id);
          return (
            <div
              key={email.id}
              onClick={() => onOpenEmail(email)}
              className={`flex items-center gap-4 py-3.5 px-2 -mx-2 rounded-lg transition-colors cursor-pointer ${
                isSelected ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onClick={(e) => e.stopPropagation()}
                onChange={() => toggleSelect(email.id)}
                className="w-4 h-4 rounded border-gray-300 shrink-0 accent-gray-900"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStar(email.id);
                }}
                className="shrink-0"
              >
                <Star
                  size={18}
                  className={
                    email.starred
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              </button>

              <p className="font-semibold text-gray-900 text-sm w-40 shrink-0 truncate">
                {email.name}
              </p>

              {!isStarredView && email.tag && (
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-md shrink-0 ${tagStyles[email.tag]}`}
                >
                  {email.tag}
                </span>
              )}

              <p className="text-sm text-gray-500 flex-1 truncate">
                {email.subject}
              </p>

              <p className="text-sm text-gray-400 shrink-0">{email.time}</p>
            </div>
          );
        })}

        {/* Starred folder la oru mail koota starred illama irundha, empty message kaatum */}
        {visibleEmails.length === 0 && (
          <p className="text-center text-sm text-gray-400 py-10">
            No starred emails yet.
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4">
        <p className="text-sm text-gray-500">Showing 1-12 of 1,253</p>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <ChevronLeft size={16} className="text-gray-500" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <ChevronRight size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
