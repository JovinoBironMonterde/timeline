'use client';

import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import { TimelineWithProgressBar } from './../../components/TimelineData';

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<'preview' | 'code' | 'data'>('preview');

  const dataCode = `export const TimelineWithProgressBar = ${JSON.stringify(
    TimelineWithProgressBar,
    null,
    2
  )};`;

  return (
    <div className="w-[100vw] relative">
      {/* Tabs */}
      <div className="flex justify-end sticky top-0 mb-2 z-30 bg-gray-400">
        <button
          onClick={() => setActive('preview')}
          className={`px-4 py-3 cursor-pointer text-md font-medium ${
            active === 'preview'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-900'
          }`}
        >
          Preview
        </button>

        <button
          onClick={() => setActive('code')}
          className={`px-4 py-3 cursor-pointer text-md font-medium ${
            active === 'code'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-900'
          }`}
        >
          Code
        </button>

        <button
          onClick={() => setActive('data')}
          className={`px-4 py-3 cursor-pointer text-md font-medium ${
            active === 'data'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-900'
          }`}
        >
          Data
        </button>
      </div>

      {/* Content */}
      {active === 'preview' && children}

      {active === 'code' && (
        <CodeBlock code={`
'use client';

import { TimeLineData as TimelineData } from './../../components/TimelineData';

export default function TimelinePage() {
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

          `} />
      )}

      {active === 'data' && (
        <CodeBlock code={dataCode} />
      )}
    </div>
  );
}
