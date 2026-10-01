import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";

const initialMembers = [
  {
    id: 1,
    name: "Jason Price",
    role: "Admin",
    email: "janick_parisian@yahoo.com",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 2,
    name: "Jukkoe Sisao",
    role: "CEO",
    email: "sibyl_kozey@gmail.com",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 3,
    name: "Harriet King",
    role: "CTO",
    email: "nadia_block@hotmail.com",
    image: "https://i.pravatar.cc/300?img=33",
  },
  {
    id: 4,
    name: "Lenora Benson",
    role: "Lead",
    email: "feil.wallace@kunde.us",
    image: "https://i.pravatar.cc/300?img=52",
  },
  {
    id: 5,
    name: "Olivia Reese",
    role: "Strategist",
    email: "kemmer.hattie@cremin.us",
    image: "https://i.pravatar.cc/300?img=60",
  },
  {
    id: 6,
    name: "Bertha Valdez",
    role: "CEO",
    email: "loraine.koelpin@tromp.io",
    image: "https://i.pravatar.cc/300?img=68",
  },
  {
    id: 7,
    name: "Harriett Payne",
    role: "Digital Marketer",
    email: "nannie_west@estrella.tv",
    image: "https://i.pravatar.cc/300?img=14",
  },
  {
    id: 8,
    name: "George Bryant",
    role: "Social Media",
    email: "delmer.kling@gmail.com",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    id: 9,
    name: "Lily French",
    role: "Strategist",
    email: "lucienne.herman@hotmail.com",
    image: "https://i.pravatar.cc/300?img=45",
  },
  {
    id: 10,
    name: "Howard Adkins",
    role: "CEO",
    email: "wiegand.leonor@herman.us",
    image: "https://i.pravatar.cc/300?img=59",
  },
  {
    id: 11,
    name: "Earl Bowman",
    role: "Digital Marketer",
    email: "waino_altenwerth@nicolette.tv",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 12,
    name: "Patrick Padilla",
    role: "Social Media",
    email: "octavia.nienow@gleichner.net",
    image: "https://i.pravatar.cc/300?img=13",
  },
];

export default function Team() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activePage="Team" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Team" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Team
            </h1>

            <button
              onClick={() => navigate("/add-team-member")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              Add New Member
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {initialMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                email={member.email}
                image={member.image}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
