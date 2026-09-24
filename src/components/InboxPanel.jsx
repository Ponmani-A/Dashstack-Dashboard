import {
  Inbox as InboxIcon,
  Star,
  Send,
  PenLine,
  AlertTriangle,
  MessageSquareWarning,
  Trash2,
  Plus,
} from "lucide-react";

const folders = [
  { name: "Inbox", icon: InboxIcon, count: 1253 },
  { name: "Starred", icon: Star, count: 245 },
  { name: "Sent", icon: Send, count: 24532 },
  { name: "Draft", icon: PenLine, count: 9 },
  { name: "Spam", icon: AlertTriangle, count: 14 },
  { name: "Important", icon: MessageSquareWarning, count: 18 },
  { name: "Bin", icon: Trash2, count: 9 },
];

const labels = [
  { name: "Primary", color: "border-emerald-500" },
  { name: "Social", color: "border-blue-500" },
  { name: "Work", color: "border-orange-500" },
  { name: "Friends", color: "border-purple-500" },
];

export default function InboxPanel({ activeFolder, onSelectFolder }) {
  return (
    <div className="w-full lg:w-72 shrink-0 bg-white rounded-2xl border border-gray-100 p-5">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
        <Plus size={18} />
        Compose
      </button>

      <p className="text-sm font-semibold text-gray-900 mt-6 mb-2">My Email</p>
      <div className="space-y-1">
        {folders.map((folder) => {
          const Icon = folder.icon;
          const isActive = activeFolder === folder.name;
          return (
            <button
              key={folder.name}
              onClick={() => onSelectFolder(folder.name)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon size={17} />
                {folder.name}
              </span>
              <span className={isActive ? "text-blue-600" : "text-gray-400"}>
                {folder.count.toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-sm font-semibold text-gray-900 mt-6 mb-2">Label</p>
      <div className="space-y-1">
        {labels.map((label) => (
          <label
            key={label.name}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="checkbox"
              className={`w-4 h-4 rounded border-2 ${label.color} accent-current`}
            />
            {label.name}
          </label>
        ))}

        <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-gray-600">
          <Plus size={16} />
          Create New Label
        </button>
      </div>
    </div>
  );
}
