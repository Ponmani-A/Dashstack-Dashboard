import { Check, Star, X, Trash2 } from "lucide-react";

export default function TodoItem({
  task,
  onToggleComplete,
  onToggleFavorite,
  onDelete,
}) {
  return (
    <div
      className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-colors ${
        task.completed ? "bg-blue-500" : "bg-gray-50"
      }`}
    >
      {/* Checkbox - click pannina, onToggleComplete call aagum */}
      <button
        onClick={() => onToggleComplete(task.id)}
        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
          task.completed
            ? "border-white bg-transparent"
            : "border-gray-300 bg-white"
        }`}
      >
        {task.completed && (
          <Check size={16} className="text-white" strokeWidth={3} />
        )}
      </button>

      <p
        className={`flex-1 font-medium ${
          task.completed ? "text-white " : "text-gray-800"
        }`}
      >
        {task.text}
      </p>

      {/* Completed task-ku mattum Trash icon, illana Star + X icons kaatum */}
      {task.completed ? (
        <button
          onClick={() => onDelete(task.id)}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center shrink-0"
        >
          <Trash2 size={18} className="text-white" />
        </button>
      ) : (
        <>
          <button
            onClick={() => onToggleFavorite(task.id)}
            className="shrink-0"
          >
            <Star
              size={22}
              className={
                task.favorite
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }
            />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-100 flex items-center justify-center shrink-0"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </>
      )}
    </div>
  );
}
