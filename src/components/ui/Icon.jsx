import * as Lu from "react-icons/lu";

/* Har key ke liye candidates — jo name tumhare react-icons version me exist karta hai, wo use hoga */
const CANDIDATES = {
  code:     ["LuCodeXml", "LuCode2", "LuCode"],
  brain:    ["LuBrain"],
  layers:   ["LuLayers"],
  gear:     ["LuSettings"],
  chart:    ["LuChartColumn", "LuBarChart3", "LuChartNoAxesColumnIncreasing"],
  book:     ["LuBookOpen"],
  bulb:     ["LuLightbulb"],
  sparkles: ["LuSparkles"],
  box:      ["LuBox"],
  db:       ["LuDatabase"],
  users:    ["LuUsers"],
    // ... purane mappings ...
  tree:     ["LuFolderTree", "LuTreePine"],
  blocks:   ["LuBlocks", "LuBox"],
  monitor:  ["LuMonitor", "LuTerminal"],
  sigma:    ["LuSigma", "LuCalculator"],
  database: ["LuDatabase", "LuTable"],
  puzzle:   ["LuPuzzle", "LuLightbulb"],
  messages: ["LuMessagesSquare", "LuMessageCircle"],
  handshake:["LuHandshake", "LuUsersRound"],
  clock:    ["LuClock", "LuTimer"],
};

const FALLBACK = Lu.LuBox || Lu.LuCircle || Object.values(Lu)[0];

export default function Icon({ name, className = "" }) {
  const cands = CANDIDATES[name] || [];
  const C = cands.map((k) => Lu[k]).find(Boolean) || FALLBACK;
  return <C className={`ic ${className}`.trim()} />;
}