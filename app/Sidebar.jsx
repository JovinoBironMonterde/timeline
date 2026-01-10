'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="
          fixed top-2 left-2 z-50
          md:hidden
          px-2 py-1 rounded-md text-gray-600 bg-gray-100 shadow
        "
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen w-64 bg-gray-100 p-4
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <button
          className="md:hidden mb-4 text-gray-600"
          onClick={() => setOpen(false)}
        >
          ✕ Close
        </button>

        <h2 className="text-xl font-bold mb-6">Sidebar</h2>

        <ul className="space-y-3 text-black">
          <li>
            <Link href="/pages/TimelineTemplates/Timeline" onClick={() => setOpen(false)}>
              Timeline
            </Link>
          </li>
          
          <li>
            <Link href="/pages/TimelineTemplates/TimelineWithList" onClick={() => setOpen(false)}>
              Timeline List
            </Link>
          </li>

          <li>
            <Link href="/pages/TimelineTemplates/TimelineWithImage" onClick={() => setOpen(false)}>
              Timeline With Image
            </Link>
          </li>

          <li>
            <Link href="/pages/TimelineTemplates/TimelineStickyHeader" onClick={() => setOpen(false)}>
              Timeline Sticky Header
            </Link>
          </li>
                    <li>
            <Link href="/pages/TimelineTemplates/TimelineVerticalCarousel" onClick={() => setOpen(false)}>
              TimelineVerticalCarousel
            </Link>
          </li>

          <li>
            <Link href="/pages/TimelineTemplates/TimelineTwoColumn" onClick={() => setOpen(false)}>
              TimelineTwoColumn
            </Link>
          </li>
          
          <li>
            <Link href="/pages/TimelineTemplates/TimelineWithCircularBar" onClick={() => setOpen(false)}>
              TimelineWithCircularBar
            </Link>
          </li>

          <li>
            <Link href="/pages/ContactTemplates/ContactWithMap" onClick={() => setOpen(false)}>
              ContactWithMap
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
