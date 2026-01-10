'use client';

import * as React from 'react';
import { TimelineTwoColumnData as TimelineData } from './../../../components/TimelineData';

export default function TimelineTwoColumn() {
  const leftColumnData = TimelineData.filter(item => item.id <= 3);
  const rightColumnData = TimelineData.filter(item => item.id > 3);

  return (
    <section className="bg-gray-200 mx-2 p-10 xl:p-20 relative over">
      <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-10">
        
        {/* LEFT COLUMN */}
        <div className="w-full bg-white relative border-l-2 border-l-cyan-500">
          {leftColumnData.map(item => (
            <div
              key={item.id}
              className="border-b border-gray-300 p-5"
            >
              <div className="w-[80px] flex items-center gap-2 bg-cyan-500 rounded-4xl -ml-7.5 mb-4">
                <span className="star w-[25px] h-[25px] bg-white text-cyan-500 rounded-4xl flex items-center justify-center -ml-1 shadow">★</span>
                <p className="text-sm text-gray-100 font-bold">{item.year}</p>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full bg-white relative border-l-2 border-l-cyan-500">
          {rightColumnData.map(item => (
            <div
              key={item.id}
              className="border-b border-gray-300 p-5"
            >
             <div className="w-[80px] flex items-center gap-2 bg-cyan-500 rounded-4xl -ml-7.5 mb-4">
                <span className="star w-[25px] h-[25px] bg-white text-cyan-500 rounded-4xl flex items-center justify-center -ml-1 shadow">★</span>
                <p className="text-sm text-gray-100 font-bold">{item.year}</p>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
