import {
  LayoutDashboard,
  Grid2x2,
  Heart,
  Inbox,
  ClipboardList,
  Package,
  Gift,
  Calendar,
  CheckSquare,
  Users,
  Receipt,
  BarChart3,
  User,
  Table,
  Settings,
  LogOut,
} from "lucide-react";

const mainMenu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Products", icon: Grid2x2, path: "/products" },
  { name: "Favorites", icon: Heart, path: "/favorites" },
  { name: "Inbox", icon: Inbox, path: "/inbox" },
  { name: "Order Lists", icon: ClipboardList, path: "/orders" },
  { name: "Product Stock", icon: Package, path: "/stock" },
];

const pagesMenu = [
  { name: "Pricing", icon: Gift, path: "/pricing" },
  { name: "Calender", icon: Calendar, path: "/calender" },
  { name: "To-Do", icon: CheckSquare, path: "/todo" },
  { name: "Contact", icon: Users, path: "/contact" },
  { name: "Invoice", icon: Receipt, path: "/invoice" },
  { name: "UI Elements", icon: BarChart3, path: "/ui-elements" },
  { name: "Team", icon: User, path: "/team" },
  { name: "Table", icon: Table, path: "/table" },
];

export default function Sidebar({ activePage = "Dashboard" }) {
  return (
    <aside className=" lg:flex lg:flex-col w-64 shrink-0 border-r border-gray-100 h-screen sticky top-0 overflow-y-auto bg-white">
      {/* Logo */}
      <div className="px-6 py-6">
        <h1 className="text-2xl font-bold">
          <span className="text-gray-900">Dash</span>
          <span className="text-blue-600">Stack</span>
        </h1>
      </div>

      <nav className="px-3 space-y-1">
        {mainMenu.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            isActive={activePage === item.name}
          />
        ))}
      </nav>

      <p className="px-6 mt-6 mb-2 text-xs font-semibold tracking-wide text-gray-400">
        PAGES
      </p>
      <nav className="px-3 space-y-1">
        {pagesMenu.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            isActive={activePage === item.name}
          />
        ))}
      </nav>

      <div className="mt-auto px-3 py-4 space-y-1 border-t border-gray-100">
        <MenuItem
          item={{ name: "Settings", icon: Settings, path: "/settings" }}
          isActive={activePage === "Settings"}
        />
        <MenuItem
          item={{ name: "Logout", icon: LogOut, path: "/logout" }}
          isActive={false}
        />
      </div>
    </aside>
  );
}

function MenuItem({ item, isActive }) {
  const Icon = item.icon;
  return (
    <a
      href={item.path}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
        isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon size={18} />
      {item.name}
    </a>
  );
}
