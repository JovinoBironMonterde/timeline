'use client';

import * as React from 'react';
import Image from 'next/image';


// Fix import: alias ExperienceData as TimelineData
import { TimeLineData as TimelineData } from './../../components/TimelineData';

export default function TimelinePage() {
  return (
    <section className="bg-sky-50 mx-2 py-10 xl:py-20">
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
              after:left-6
              after:top-4
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
          <div className="w-full sm:block xl:hidden pl-14 pr-4 xl:pl-20 xl:pr-10">
            {TimelineData.map((exper, index) => {
              return (
                <div key={exper.id} className="w-full relative mb-10">
                  {/* Center Icon */}
                  <span className="absolute -left-8 top-4 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-4xl z-20">
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
