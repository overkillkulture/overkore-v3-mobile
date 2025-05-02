
import { useState } from "react";
import { Lock, Brain, Rocket, Radar, RefreshCw, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function JaysonOSDashboard() {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");

  const handleUnlock = () => {
    if (pin === "0420") setUnlocked(true); // Temporary PIN for preview
  };

  return (
    <>
      {!unlocked ? (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
          <Lock className="w-12 h-12 mb-4" />
          <h1 className="text-2xl mb-2">Enter Access PIN</h1>
          <Input
            type="password"
            placeholder="••••"
            className="mb-4 w-40 text-center"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <Button onClick={handleUnlock}>Unlock</Button>
        </div>
      ) : (
        <div className="min-h-screen bg-zinc-900 text-white p-4 grid grid-cols-1 gap-4">
          <h1 className="text-3xl font-bold mb-4 text-center">JaysonOS - Overkore Tactical Interface</h1>

          <Card className="bg-zinc-800 shadow-md border-zinc-700">
            <CardContent className="flex items-center gap-4 p-4">
              <Briefcase className="w-6 h-6" />
              <span className="text-lg">Launch BizOps</span>
              <Button className="ml-auto">Enter</Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 shadow-md border-zinc-700">
            <CardContent className="flex items-center gap-4 p-4">
              <Rocket className="w-6 h-6" />
              <span className="text-lg">Mission Feed</span>
              <Button className="ml-auto">View</Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 shadow-md border-zinc-700">
            <CardContent className="flex items-center gap-4 p-4">
              <Brain className="w-6 h-6" />
              <span className="text-lg">BrainDrain Mode</span>
              <Button className="ml-auto">Capture</Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 shadow-md border-zinc-700">
            <CardContent className="flex items-center gap-4 p-4">
              <Radar className="w-6 h-6" />
              <span className="text-lg">Scout Mode</span>
              <Button className="ml-auto">Scan</Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 shadow-md border-zinc-700">
            <CardContent className="flex items-center gap-4 p-4">
              <RefreshCw className="w-6 h-6" />
              <span className="text-lg">System Sync</span>
              <Button className="ml-auto">Sync</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}


