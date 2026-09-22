import {
  ArrowLeft,
  Printer,
  Star,
  Trash2,
  Mic,
  Paperclip,
  FileText,
  Send,
} from "lucide-react";

// Tag color mapping - EmailList.jsx la irukra adhே object, ithே place la venும் adhுனால் mattum copy pannirukom
const tagStyles = {
  Primary: "bg-emerald-100 text-emerald-600",
  Social: "bg-blue-100 text-blue-600",
  Work: "bg-orange-100 text-orange-600",
  Friends: "bg-purple-100 text-purple-600",
};

// Sample conversation - real app la, email.id vachु backend-la irundhu
// andha thread-oda messages ah fetch pannுவோம். Ippo static sample data.
const sampleMessages = [
  {
    id: 1,
    fromMe: false,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    time: "6.30 pm",
  },
  {
    id: 2,
    fromMe: true,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
    time: "6.34 pm",
  },
  {
    id: 3,
    fromMe: false,
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default. Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.",
    time: "6.38 pm",
  },
];

// Props:
// email    -> select panna email object ({ id, name, tag, ... })
// onBack   -> back arrow click pannina, ithை call pannி list view ku thirumbanum
export default function EmailThread({ email, onBack }) {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 flex flex-col h-[600px]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center shrink-0"
        >
          <ArrowLeft size={16} className="text-gray-600" />
        </button>

        <h2 className="font-bold text-gray-900">{email.name}</h2>

        {email.tag && (
          <span
            className={`text-xs font-medium px-3 py-1 rounded-md ${tagStyles[email.tag]}`}
          >
            {email.tag}
          </span>
        )}

        {/* Right side action icons */}
        <div className="flex items-center gap-2 ml-auto">
          <button className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <Printer size={16} className="text-gray-600" />
          </button>
          <button className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <Star size={16} className="text-gray-600" />
          </button>
          <button className="w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center">
            <Trash2 size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Messages - scroll aaganum na, flex-1 + overflow-y-auto */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {sampleMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-3 ${msg.fromMe ? "justify-end" : "justify-start"}`}
          >
            {/* Avatar - namba mattum illatha (fromMe) side la kaatatha */}
            {!msg.fromMe && (
              <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
            )}

            <div
              className={`max-w-lg rounded-2xl px-5 py-4 ${
                msg.fromMe
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <div
                className={`flex items-center justify-end gap-2 mt-2 text-xs ${msg.fromMe ? "text-blue-100" : "text-gray-400"}`}
              >
                <span>{msg.time}</span>
                <span className="cursor-pointer">⋮</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reply box */}
      <div className="flex items-center gap-3 px-5 py-4 border-t border-gray-50">
        <button className="text-gray-400 hover:text-gray-600 shrink-0">
          <Mic size={20} />
        </button>
        <input
          type="text"
          placeholder="Write massage"
          className="flex-1 min-w-0 outline-none text-sm placeholder:text-gray-400"
        />
        <button className="text-gray-400 hover:text-gray-600 shrink-0">
          <Paperclip size={20} />
        </button>
        <button className="text-gray-400 hover:text-gray-600 shrink-0">
          <FileText size={20} />
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shrink-0">
          Send
          <Send size={15} />
        </button>
      </div>
    </div>
  );
}
