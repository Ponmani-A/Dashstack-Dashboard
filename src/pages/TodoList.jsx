import { useState } from "react";
import { Plus } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TodoItem from "../components/TodoItem";

const initialTasks = [
  { id: 1, text: "Meeting with CEO", completed: false, favorite: false },
  { id: 2, text: "Pick up kids from school", completed: false, favorite: true },
  { id: 3, text: "Shopping with Brother", completed: false, favorite: false },
  { id: 4, text: "Review with HR", completed: true, favorite: false },
  { id: 5, text: "Going to Dia's School", completed: false, favorite: false },
  { id: 6, text: "Check design files", completed: false, favorite: true },
  { id: 7, text: "Update File", completed: false, favorite: false },
];

export default function TodoList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function toggleFavorite(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, favorite: !task.favorite } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function handleAddTask() {
    if (newTaskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
      favorite: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setNewTaskText("");
    setShowAddForm(false);
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="To-Do" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="To-Do" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              To-Do List
            </h1>
            <button
              onClick={() => setShowAddForm((prev) => !prev)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              Add New Task
            </button>
          </div>

          {showAddForm && (
            <div className="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4">
              <input
                type="text"
                autoFocus
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                placeholder="Type your task here..."
                className="flex-1 outline-none text-sm px-2"
              />
              <button
                onClick={handleAddTask}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg shrink-0"
              >
                <Plus size={18} />
              </button>
            </div>
          )}

          <div className="space-y-4">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onToggleComplete={toggleComplete}
                onToggleFavorite={toggleFavorite}
                onDelete={deleteTask}
              />
            ))}

            {tasks.length === 0 && (
              <p className="text-center text-gray-400 py-16">
                No tasks yet. Add one above!
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
