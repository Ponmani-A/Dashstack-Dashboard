export const events = [
  {
    id: 1,
    title: "Design Conference",
    time: "Today 07:19 AM",
    address: "56 Davion Mission Suite 157",
    location: "Meaghanberg",
    avatars: ["https://i.pravatar.cc/40?img=12"],
    moreCount: 15,
    color: "purple",
  },
  {
    id: 2,
    title: "Weekend Festival",
    time: "16 October 2019 at 5.00 PM",
    address: "853 Moore Flats Suite 158",
    location: "Sweden",
    avatars: [
      "https://i.pravatar.cc/40?img=13",
      "https://i.pravatar.cc/40?img=14",
      "https://i.pravatar.cc/40?img=15",
    ],
    moreCount: 20,
    color: "pink",
  },
  {
    id: 3,
    title: "Glastonbury Festival",
    time: "20-22 October 2019 at 8.00 PM",
    address: "646 Walter Road Apt. 571",
    location: "Turks and Caicos Islands",
    avatars: [
      "https://i.pravatar.cc/40?img=16",
      "https://i.pravatar.cc/40?img=17",
      "https://i.pravatar.cc/40?img=18",
    ],
    moreCount: 14,
    color: "orange",
  },
  {
    id: 4,
    title: "Ultra Europe 2019",
    time: "25 October 2019 at 10.00 PM",
    address: "506 Satterfield Tunnel Apt. 963",
    location: "San Marino",
    avatars: [
      "https://i.pravatar.cc/40?img=19",
      "https://i.pravatar.cc/40?img=20",
      "https://i.pravatar.cc/40?img=21",
    ],
    moreCount: 42,
    color: "blue",
  },
];

export default function EventsPanel({ onAddEvent }) {
  return (
    <div className="w-full lg:w-80 shrink-0 bg-white rounded-2xl border border-gray-100 p-5">
      <button
        onClick={onAddEvent}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-colors"
      >
        + Add New Event
      </button>

      <p className="font-bold text-gray-900 mt-6 mb-4">You are going to</p>

      <div className="divide-y divide-gray-50">
        {events.map((event) => (
          <div key={event.id} className="py-4 first:pt-0">
            <div className="flex items-start gap-3">
              {event.avatars[0] ? (
                <img
                  src={event.avatars[0]}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
              )}

              <div className="min-w-0">
                <p className="font-semibold text-gray-900 truncate">
                  {event.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">{event.time}</p>
                <p className="text-sm text-gray-500">{event.address}</p>
                <p className="text-sm text-gray-500">{event.location}</p>

                {/* Attendee avatars + "+N" badge */}
                <div className="flex items-center -space-x-2 mt-3">
                  {event.avatars.slice(0, 3).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-7 h-7 rounded-full object-cover border-2 border-white"
                    />
                  ))}
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-[10px] font-semibold text-blue-600 ml-1">
                    {event.moreCount}+
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-xl mt-4 transition-colors">
        See More
      </button>
    </div>
  );
}
