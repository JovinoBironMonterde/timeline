'use client'

import { useState } from 'react'
import { TimelineVerticalCarouselData as TimelineData } from './../../components/TimelineData';

export default function TimelineVerticalCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () =>
    setCurrent((prev) => (prev + 1) % TimelineData.length)

  const prev = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + TimelineData.length) %
        TimelineData.length
    )

  return (
    <section className='w-full h-[90vh] flex items-center px-4'>
      <div className="relative mx-auto flex w-full xl:w-[70%] h-[420px] items-center gap-4 xl:gap-12 overflow-hidden">
        {/* Timeline */}
        <div className="relative flex h-full flex-col items-center">
          <div className="absolute top-0 left-13 h-full  w-px bg-gray-300" />

          {TimelineData.map((item, index) => (
            <div key={item.id} className="relative z-10 flex h-full items-center  gap-4 w-16 xl:w-26">
              <button
                onClick={() => setCurrent(index)}
                className={`mb-0 text-sm transition-colors ${
                  index === current
                    ? 'font-semibold text-black'
                    : 'text-gray-400 hover:text-black'
                }`}
              >
                {item.year}
              </button>

              <button
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-transform ${
                  index === current
                    ? 'scale-125 bg-black'
                    : 'bg-gray-300 hover:scale-110'
                }`}
                aria-label={`Go to year ${item.year}`}
              />
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div hidden className="relative h-full w-[320px] overflow-hidden">
          {TimelineData.map((item, index) => {
            const offset = index - current

            return (
              <div
                key={item.id}
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(${offset * 100}%)`,
                }}
              >
                <div className="relative h-full w-full flex items-center overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.company}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>

              </div>
            )
          })}
        </div>

        {/* Content */}
        <div className="relative h-full w-full overflow-hidden">
          {TimelineData.map((item, index) => {
            const offset = index - current

            return (
              <div
                key={item.id}
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(${offset * 100}%)`,
                }}
              >
                <div className="h-full w-full block xl:flex items-center gap-4 justify-center">
                  <div className="relative mb-2 h-[200px] xl:h-full w-full xl:w-[400px] flex items-center overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.company}
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="mb-4 text-xl xl:text-3xl font-semibold">
                      {item.company}
                    </h2>

                    <p className="mb-2 text-sm text-indigo-600">
                      {item.company}
                    </p>

                    <p className="mb-6 text-sm text-gray-600">
                      {item.description}
                    </p>

                    <button className="w-fit rounded bg-black px-6 py-2 text-sm text-white hover:bg-gray-800">
                      Call-to-action
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="hidden xl:block">
          <div className="flex flex-col gap-4">
            <button
              onClick={prev}
              className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
            >
              ↑
            </button>
            <button
              onClick={next}
              className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
