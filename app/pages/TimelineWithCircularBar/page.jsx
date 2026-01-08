'use client';

import * as React from 'react';
import CircularProgress from './../../components/CircularProgress';
import { TimelineWithProgressBar as TimelineData } from './../../components/TimelineData';

export default function TimelineWithCircularBarPage() {
  // Helper component for company info
  const CompanyInfo = ({ company, year, position }) => (
    <div className="text-gray-900" style={{ maxWidth: '850px' }}>
      <h1 className="text-3xl font-bold">{company}</h1>
      <div className="text-gray-700">{year}</div>
      <div className="text-gray-700">{position}</div>
    </div>
  );

  const DescriptionCard = ({ description, padding = 'p-10' }) => (
    <div className={`w-full shadow rounded-2xl relative bg-gray-50 ${padding}`} style={{ maxWidth: '850px' }}>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  return (
    <section className="bg-sky-50 mx-2 py-10 xl:py-20">
      <div className="w-full Experience-Wrapper">
        {/* Timeline wrapper with vertical line */}
        <div
          className="
            w-full flex flex-col text-black relative
            after:absolute after:content-[''] after:block
            after:h-full after:w-2 after:bg-gray-500
            xl:after:left-1/2 after:left-6 after:top-4
            after:-translate-x-1/2 after:opacity-50 after:z-10
          "
        >
          {/* Desktop View */}
          <div className="w-full hidden xl:block">
            {TimelineData.map((exper, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exper.id}
                  className="w-full grid grid-cols-2 gap-50 p-10 items-start relative mb-10"
                >
                  {/* Center CircularProgress */}
                  <span className="absolute left-1/2 top-14 transform bg-sky-50 rounded-full p-2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <CircularProgress percentage={exper.percentage} />
                  </span>

                  {isEven ? (
                    <>
                      {/* Left: Company Info */}
                      <div className="flex justify-end text-end">
                        <CompanyInfo
                          company={exper.company}
                          year={exper.year}
                          position={exper.position}
                        />
                      </div>
                      {/* Right: Description */}
                      <DescriptionCard description={exper.description} />
                    </>
                  ) : (
                    <>
                      {/* Left: Description */}
                      <div className="flex justify-end">
                        <DescriptionCard description={exper.description} />
                      </div>
                      {/* Right: Company Info */}
                      <div className="text-start">
                        <CompanyInfo
                          company={exper.company}
                          year={exper.year}
                          position={exper.position}
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile View */}
          <div className="w-full sm:block xl:hidden pl-14 pr-4">
            {TimelineData.map((exper) => (
              <div key={exper.id} className="w-full relative mb-8">
                {/* Center CircularProgress */}
                <span className="absolute -left-8 top-4 -translate-x-1/2 -translate-y-1/2 bg-sky-50 rounded-full p-2 z-20">
                  <CircularProgress percentage={exper.percentage} />
                </span>

                <div className="w-full flex flex-col gap-4">
                  <CompanyInfo
                    company={exper.company}
                    year={exper.year}
                    position={exper.position}
                  />
                  <DescriptionCard description={exper.description} padding="p-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
