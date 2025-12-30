'use client';

import { useState } from 'react';

type Tab = {
  label: string;
  content: React.ReactNode;
};

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      {/* Tab headers */}
      <div className="flex border-b mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              px-4 py-2 text-sm font-medium
              ${
                active === i
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>{tabs[active].content}</div>
    </div>
  );
}
