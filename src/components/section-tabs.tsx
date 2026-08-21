"use client";

import { ReactNode, useState } from "react";

export interface Tab {
  label: string;
  content: ReactNode;
}

export function SectionTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  if (tabs.length === 0) return null;

  return (
    <div>
      <div className="sticky top-0 z-30 bg-[#FFFCF8] flex gap-2 mb-8 py-3 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm tracking-wide uppercase transition-all duration-200 ${
              index === active
                ? "bg-zinc-500 text-white font-medium"
                : "text-zinc-500 hover:bg-zinc-500 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[calc(100vh-9rem)]">
        {tabs.map((tab, index) => (
          <div key={tab.label} className={index === active ? "" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
