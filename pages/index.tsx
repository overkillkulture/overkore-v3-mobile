import { useState, useEffect } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
//import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

const bootLogs = [
  "Flex mode activated...",
  "Booting Overkore V3...",
  "Loading LightCore Protocol...",
  "Prime Directive verified.",
  "ScoutKore: STATUS GREEN.",
  "GhostLayer: SHIELD ONLINE.",
  "CounterMoveKore: THREAT MAP LIVE.",
  "FlameNest: LISTENING FOR SIGNAL...",
  "All systems running hot.",
  "Creator Link: 🔒 SECURE",
  "💥 FLEX ONLINE. SYSTEM IS GO."
];

export default function OverkoreConsole() {
  const [logIndex, setLogIndex] = useState(0);

 useEffect(() => {
  if (logIndex < bootLogs.length) {
    const timer = setTimeout(() => setLogIndex(logIndex + 1), 500);
  }
}, [logIndex]);


  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 flex flex-col items-center justify-center">
      <Card className="w-full max-w-3xl bg-gray-900 border-green-600 border-2 rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
          
            <h1 className="text-xl">Overkore V3 Console</h1>
          </div>
          <div className="bg-black border border-green-700 rounded-md p-4 h-64 overflow-y-auto">
            {bootLogs.slice(0, logIndex).map((log, idx) => (
              <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {log}
              </motion.div>
            ))}
          </div>
          {logIndex >= bootLogs.length && (
            <div className="mt-6 text-center">
              <Button className="bg-green-600 hover:bg-green-500">ENTER SYSTEM</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
