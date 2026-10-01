import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  UserCog,
  KeyRound,
  History,
  LogOut,
  Check,
  Settings,
  CalendarDays,
  User,
  AlertCircle,
} from "lucide-react";

const menuItems = [
  {
    label: "Manage Account",
    icon: UserCog,
    path: "/settings",
  },
  {
    label: "Change Password",
    icon: KeyRound,
    path: "/settings",
  },
  {
    label: "Activity Log",
    icon: History,
    path: "/settings",
  },
];

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    code: "fr",
    name: "French",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    code: "es",
    name: "Spanish",
    flag: "https://flagcdn.com/w40/es.png",
  },
];

const notifications = [
  {
    title: "Settings",
    description: "Update Dashboard",
    icon: Settings,
    bg: "bg-blue-100",
    text: "text-blue-500",
  },
  {
    title: "Event Update",
    description: "An event date update again",
    icon: CalendarDays,
    bg: "bg-pink-100",
    text: "text-pink-500",
  },
  {
    title: "Profile",
    description: "Update your profile",
    icon: User,
    bg: "bg-purple-100",
    text: "text-purple-500",
  },
  {
    title: "Application Error",
    description: "Check Your running application",
    icon: AlertCircle,
    bg: "bg-red-100",
    text: "text-red-500",
  },
];

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);

  const [languageOpen, setLanguageOpen] = useState(false);

  const [notificationOpen, setNotificationOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  function handleLogout() {
    setProfileOpen(false);
    navigate("/login");
  }

  function handleMenuClick(path) {
    setProfileOpen(false);
    navigate(path);
  }

  function handleLanguageSelect(language) {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  }

  return (
    <header className="flex items-center gap-4 px-4 sm:px-6 py-4 bg-white border-b border-gray-100">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
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
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setNotificationOpen((prev) => !prev);

              setProfileOpen(false);
              setLanguageOpen(false);
            }}
            className="relative p-2 rounded-full hover:bg-gray-100"
          >
            <Bell size={20} className="text-blue-600" />

            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              6
            </span>
          </button>

          {notificationOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setNotificationOpen(false)}
              />

              <div className="absolute right-0 top-full mt-3 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 w-80 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-700">
                    Notification
                  </p>
                </div>

                {notifications.map((notification, index) => {
                  const Icon = notification.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${notification.bg} ${notification.text}`}
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {notification.title}
                        </p>

                        <p className="text-xs text-gray-400">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <div className="border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setNotificationOpen(false)}
                    className="w-full py-3 text-xs text-gray-400 hover:bg-gray-50"
                  >
                    See all notification
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="relative hidden md:block">
          <button
            type="button"
            onClick={() => {
              setLanguageOpen((prev) => !prev);

              setProfileOpen(false);
              setNotificationOpen(false);
            }}
            className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer"
          >
            <img
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              className="w-9 h-5 object-cover"
            />

            <span>{selectedLanguage.name}</span>

            <ChevronDown
              size={14}
              className={`transition-transform ${
                languageOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {languageOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setLanguageOpen(false)}
              />

              <div className="absolute right-0 top-full mt-3 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 w-56">
                <p className="text-xs font-semibold text-gray-400 px-5 pb-2">
                  Select Language
                </p>

                {languages.map((language) => {
                  const isSelected = selectedLanguage.code === language.code;

                  return (
                    <button
                      type="button"
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <span className="flex items-center gap-3">
                        <img
                          src={language.flag}
                          alt={language.name}
                          className="w-9 h-5 object-cover"
                        />

                        <span>{language.name}</span>
                      </span>

                      {isSelected && (
                        <Check size={16} className="text-gray-900" />
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setProfileOpen((prev) => !prev);

              setLanguageOpen(false);
              setNotificationOpen(false);
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="https://i.pravatar.cc/40?img=47"
              alt="profile"
              className="w-9 h-9 rounded-full object-cover"
            />

            <div className="hidden sm:block leading-tight text-left">
              <p className="text-sm font-semibold text-gray-800">Moni Roy</p>

              <p className="text-xs text-gray-400">Admin</p>
            </div>

            <ChevronDown
              size={16}
              className={`hidden sm:block text-gray-400 transition-transform ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {profileOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setProfileOpen(false)}
              />

              <div className="absolute right-0 top-full mt-3 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-56">
                {menuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() => handleMenuClick(item.path)}
                      className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 text-left"
                    >
                      <Icon size={17} className="text-gray-500" />

                      {item.label}
                    </button>
                  );
                })}

                <div className="border-t border-gray-50 my-1" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-5 py-3 text-sm text-red-500 hover:bg-red-50 text-left"
                >
                  <LogOut size={17} />
                  Log out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
