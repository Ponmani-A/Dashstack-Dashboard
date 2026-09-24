import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InboxPanel from "../components/InboxPanel";
import EmailList from "../components/EmailList";
import EmailThread from "../components/EmailThread";

const initialEmails = [
  {
    id: 1,
    name: "Jullu Jalal",
    tag: "Primary",
    subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    starred: false,
  },
  {
    id: 2,
    name: "Minerva Barnett",
    tag: "Work",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    starred: false,
  },
  {
    id: 3,
    name: "Peter Lewis",
    tag: "Friends",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    starred: false,
  },
  {
    id: 4,
    name: "Anthony Briggs",
    tag: null,
    subject: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    starred: true,
  },
  {
    id: 5,
    name: "Clifford Morgan",
    tag: "Social",
    subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    starred: false,
  },
  {
    id: 6,
    name: "Cecilia Webster",
    tag: "Friends",
    subject: "Always Look On The Bright Side Of Life",
    time: "3:52 PM",
    starred: false,
  },
  {
    id: 7,
    name: "Harvey Manning",
    tag: null,
    subject: "Curling Irons Are As Individual As The Women Who Use Them",
    time: "2:30 PM",
    starred: true,
  },
  {
    id: 8,
    name: "Willie Blake",
    tag: "Primary",
    subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    starred: false,
  },
  {
    id: 9,
    name: "Minerva Barnett",
    tag: "Work",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    starred: false,
  },
  {
    id: 10,
    name: "Fanny Weaver",
    tag: null,
    subject: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    starred: true,
  },
  {
    id: 11,
    name: "Olga Hogan",
    tag: "Social",
    subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    starred: false,
  },
  {
    id: 12,
    name: "Lora Houston",
    tag: "Friends",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    starred: false,
  },
];

export default function Inbox() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // entha folder active la iruko atha track pantrathuku use pantrom ...default ah inbox irukum
  const [activeFolder, setActiveFolder] = useState("Inbox");

  const [emails, setEmails] = useState(initialEmails); // all email show pantrathuku initial email la ulla list .

  // null na, list view katrom. Object irundha, thread/chat view katum.
  const [openEmail, setOpenEmail] = useState(null);

  function toggleStar(id) {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email,
      ),
    );
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Inbox" />
      </div>

      {/* mobile sidebar  sidebar true ana mattum ithu work agum */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Inbox" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Inbox
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <InboxPanel
              activeFolder={activeFolder}
              onSelectFolder={setActiveFolder}
            />

            {/* openEmail irundha thread view, illana list view */}
            {openEmail ? (
              <EmailThread
                email={openEmail}
                onBack={() => setOpenEmail(null)}
              />
            ) : (
              <EmailList
                emails={emails}
                toggleStar={toggleStar}
                activeFolder={activeFolder}
                onOpenEmail={setOpenEmail}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
