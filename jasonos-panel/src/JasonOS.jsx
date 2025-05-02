
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function JasonOS() {
  const [log, setLog] = useState([]);
  const [input, setInput] = useState("");

  const handleLog = () => {
    if (!input) return;
    const entry = `${new Date().toLocaleTimeString()} — ${input}`;
    setLog((prev) => [...prev.slice(-19), entry]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 font-mono">
      <h1 className="text-xl text-white mb-4">JasonOS v1.0 — Tactical Uplink</h1>

      <Card className="bg-gray-900 border-green-700">
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-green-400 text-lg">Log Input</h2>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's happening out there? Log your thoughts, friction, ideas..."
              className="bg-black border-green-500 text-green-300 text-sm"
            />
            <Button onClick={handleLog} className="mt-2 bg-green-700 hover:bg-green-500">
              Log It
            </Button>
          </div>

          <div>
            <h2 className="text-green-400 text-lg">Command Feed</h2>
            <ul className="text-sm max-h-64 overflow-y-auto">
              {log.map((entry, idx) => (
                <li key={idx}>> {entry}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
