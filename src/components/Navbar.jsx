import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import flag from "../assets/flag.png";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="flex items-center gap-4 px-4 sm:px-6 py-4 bg-white border-b border-gray-100">
      <button
        onClick={onMenuClick}
        className=" p-2 rounded-lg hover:bg-gray-100"
      >
        <Menu size={22} />
      </button>
      <div className="flex-1 max-w-md relative hidden sm:block">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center gap-3 sm:gap-5 ml-auto">
        <button className="relative p-2 rounded-full hover:bg-gray-100 ">
          <Bell size={20} className="text-blue-600 " />
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            6
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
          <span>
            <img src={flag} alt="flag" className="w-9 h-5 object-cover " />
          </span>
          <span>English</span>
          <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=47"
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
          />

          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-gray-800">Moni Roy</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <ChevronDown size={16} className="hidden sm:block text-gray-400" />
        </div>
      </div>
    </header>
  );
}
