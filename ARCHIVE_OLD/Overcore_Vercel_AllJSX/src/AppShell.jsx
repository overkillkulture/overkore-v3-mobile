import React from "react";
import GhostConsole from "./GhostConsole.jsx";
import Workshop from "./Workshop.jsx";
import UpgradeQueue from "./UpgradeQueue.jsx";

export default function AppShell() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Overcore v1</h1>
      <GhostConsole />
      <Workshop />
      <UpgradeQueue />
    </div>
  );
}