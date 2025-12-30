'use client';

import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<'preview' | 'code'>('preview');

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex border-b  sticky top-0 bg-amber-50 z-50 mb-6">
        <button
          onClick={() => setActive('preview')}
          className={`px-4 py-2 text-sm font-medium ${
            active === 'preview'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500'
          }`}
        >
          Preview
        </button>

        <button
          onClick={() => setActive('code')}
          className={`px-4 py-2 text-sm font-medium ${
            active === 'code'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500'
          }`}
        >
          Code
        </button>
      </div>

      {/* Content */}
      {active === 'preview' && children}

      {active === 'code' && (
        <CodeBlock
          code={`
'use client';

import * as React from 'react';
import Image from 'next/image';


// Fix import: alias ExperienceData as TimelineData
import { TimeLineData as TimelineData } from './../../components/TimelineData';

export default function ProfilePage() {
  return (
    <section className="bg-sky-50 py-20">
      <div className="w-full Experience-Wrapper">
          <div
            className="
              w-full flex flex-col text-black relative
              after:absolute
              after:content-['']
              after:block
              after:h-full
              after:w-0.5
              after:bg-gray-500
              xl:after:left-1/2
              sm:after:left-10
              after:left-10
              after:top-0
              after:-translate-x-1/2
              after:opacity-50
              after:z-10
            "
          >
          {/* Desktop View */}
          <div className="w-full hidden sm:hidden xl:block">
            {TimelineData.map((exper, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exper.id} className="w-full grid grid-cols-2 gap-50 p-10 items-start relative mb-10">
                  {/* Center Icon */}
                  <span className="absolute left-1/2 top-14 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-4xl z-20">
                    ●
                  </span>

                  {isEven ? (
                    <>
                      {/* LEFT – Company Info */}
                      <div className="flex justify-end text-end ">
                        <div  style={{ maxWidth: '850px'}}>
                          <h1 className="text-3xl font-bold">{exper.company}</h1>
                          <div className="text-gray-700">{exper.year}</div>
                          <div className="text-gray-700">{exper.position}</div>
                        </div>
                      </div>

                      {/* RIGHT – Description */}
                      <div className="w-full p-10 shadow rounded-2xl relative bg-gray-50"  style={{ maxWidth: '850px'}}>
                        <p className="text-gray-700">{exper.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* LEFT – Description */}
                      <div className="flex justify-end">
                        <div className="w-full p-10 shadow rounded-2xl relative bg-gray-50" style={{ maxWidth: '850px'}}>
                          <p className="text-gray-700">{exper.description}</p>
                        </div>
                      </div>

                      {/* RIGHT – Company Info */}
                      <div className="text-start" style={{ maxWidth: '850px'}}>
                        <h1 className="text-3xl font-bold">{exper.company}</h1>
                        <div className="text-gray-700">{exper.year}</div>
                        <div className="text-gray-700">{exper.position}</div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile View */}
          <div className="w-full sm:block xl:hidden pl-20 pr-10">
            {TimelineData.map((exper, index) => {
              return (
                <div key={exper.id} className="w-full relative mb-10">
                  {/* Center Icon */}
                  <span className="absolute -left-10 top-14 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-4xl z-20">
                    ●
                  </span>

                  <div className='w-full'>
                    <div className="flex ">
                      <div  style={{ maxWidth: '850px'}}>
                        <h1 className="text-3xl font-bold">{exper.company}</h1>
                        <div className="text-gray-700">{exper.year}</div>
                        <div className="text-gray-700">{exper.position}</div>
                      </div>
                    </div>

                    <div className="w-full p-10 shadow rounded-2xl relative bg-gray-50"  style={{ maxWidth: '850px'}}>
                      <p className="text-gray-700">{exper.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

        `}
        />
      )}
    </div>
  );
}
