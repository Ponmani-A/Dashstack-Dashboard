import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import Team1 from "../assets/team-1.png";
import Team2 from "../assets/team-2.png";
import Team3 from "../assets/team-3.png";
import Team4 from "../assets/team-4.png";
import Team5 from "../assets/team-5.png";

// Sample members - image-ku online URL use pannirukken, adhunala local file illama
// build error varathu. Neenga unga own photo venum na, "../assets/xxx.png" import panni
// inga maathikalam (file name lowercase ah irukkanum, Vercel case-sensitive).
const initialMembers = [
  {
    id: 1,
    name: "Jason Price",
    role: "Admin",
    email: "janick_parisian@yahoo.com",
    image: Team1,
  },
  {
    id: 2,
    name: "Jukkoe Sisao",
    role: "CEO",
    email: "sibyl_kozey@gmail.com",
    image: Team2,
  },
  {
    id: 3,
    name: "Harriet King",
    role: "CTO",
    email: "nadia_block@hotmail.com",
    image: Team3,
  },
  {
    id: 4,
    name: "Lenora Benson",
    role: "Lead",
    email: "feil.wallace@kunde.us",
    image: Team4,
  },
  {
    id: 5,
    name: "Olivia Reese",
    role: "Strategist",
    email: "kemmer.hattie@cremin.us",
    image: Team5,
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
  const [members, setMembers] = useState(initialMembers);

  // "Add New Member" click pannina, indha inline form open aagum
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newEmail, setNewEmail] = useState("");

  function handleAddMember() {
    // 3 field-um nirambanum
    if (
      newName.trim() === "" ||
      newRole.trim() === "" ||
      newEmail.trim() === ""
    )
      return;

    const newMember = {
      id: Date.now(),
      name: newName,
      role: newRole,
      email: newEmail,
      // Photo illama, name-oda initials vachu avatar automatic ah generate aagum
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(newName)}&size=300&background=E5E7EB&color=374151`,
    };
    setMembers((prev) => [newMember, ...prev]);
    setNewName("");
    setNewRole("");
    setNewEmail("");
    setShowAddForm(false);
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
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
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Team
            </h1>
            <button
              onClick={() => setShowAddForm((prev) => !prev)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              Add New Member
            </button>
          </div>

          {showAddForm && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col lg:flex-row gap-3">
              <input
                type="text"
                autoFocus
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Name"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Role (CEO, Lead...)"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddMember()}
                placeholder="Email"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button
                onClick={handleAddMember}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl shrink-0"
              >
                Add
              </button>
            </div>
          )}

          {/* Mobile la 1, sm la 2, lg la 3, xl la 4 column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {members.map((member) => (
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
