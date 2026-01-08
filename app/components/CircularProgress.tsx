'use client';

import { useEffect, useState } from 'react';

interface Props {
  percentage: string;
}

export default function CircularProgress({ percentage }: Props) {
  const value = parseInt(percentage.replace('%', ''));
  const [size, setSize] = useState(90);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    const handleResize = () => {
      setSize(mediaQuery.matches ? 50 : 90);
    };

    handleResize(); // initial check
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const strokeWidth = size === 50 ? 5 : 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className="shrink-0"
    >
      {/* Background */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#3b82f6"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.4s ease' }}
      />

      {/* Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size === 50 ? 10 : 16}
        fontWeight="600"
        fill="#111827"
      >
        {percentage}
      </text>
    </svg>
  );
}
