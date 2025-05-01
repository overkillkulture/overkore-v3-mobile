
import { useState } from "react";

export default function PrebleInbox() {
  const [leads, setLeads] = useState([
    { id: 1, name: "Jenny Hall", email: "jennyhall@example.com", msg: "Saw your site. Interested in estimate.", tag: "New" },
    { id: 2, name: "Frank M.", email: "frankm425@gmail.com", msg: "We’re remodeling our exterior.", tag: "Needs Call" }
  ]);
  const [selectedTag, setSelectedTag] = useState("All");

  const updateTag = (id, tag) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, tag } : lead));
  };

  const filtered = selectedTag === "All" ? leads : leads.filter(l => l.tag === selectedTag);

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 font-mono">
      <h1 className="text-2xl text-white mb-4">PrebleInbox — Lead Command</h1>

      <div className="mb-4">
        <label className="mr-2 text-sm">Filter:</label>
        {['All', 'New', 'Needs Call', 'Estimate Set', 'Ignore'].map(tag => (
          <button key={tag} onClick={() => setSelectedTag(tag)} className="px-2 py-1 m-1 border border-green-600 text-sm hover:bg-green-600">
            {tag}
          </button>
        ))}
      </div>

      <ul className="space-y-4">
        {filtered.map(lead => (
          <li key={lead.id} className="border border-green-800 p-4 bg-gray-900 rounded">
            <p><strong>Name:</strong> {lead.name}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Message:</strong> {lead.msg}</p>
            <div className="mt-2">
              {['New', 'Needs Call', 'Estimate Set', 'Ignore'].map(tag => (
                <button
                  key={tag}
                  onClick={() => updateTag(lead.id, tag)}
                  className={`px-2 py-1 mr-2 text-xs ${lead.tag === tag ? 'bg-green-500' : 'bg-green-800'} hover:bg-green-400`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
