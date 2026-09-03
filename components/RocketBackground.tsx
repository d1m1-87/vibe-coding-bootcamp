"use client";

import { useMemo } from "react";

const ROCKET_COUNT = 14;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function RocketBackground() {
  const rockets = useMemo(
    () =>
      Array.from({ length: ROCKET_COUNT }, (_, i) => ({
        id: i,
        left: randomBetween(0, 100),
        delay: randomBetween(0, 12),
        duration: randomBetween(9, 18),
        size: randomBetween(1.5, 3),
        drift: randomBetween(-40, 40),
      })),
    []
  );

  return (
    <div className="rocket-background" aria-hidden="true">
      {rockets.map((rocket) => (
        <span
          key={rocket.id}
          className="rocket"
          style={{
            left: `${rocket.left}%`,
            animationDelay: `${rocket.delay}s`,
            animationDuration: `${rocket.duration}s`,
            fontSize: `${rocket.size}rem`,
            ["--drift" as string]: `${rocket.drift}px`,
          }}
        >
          🚀
        </span>
      ))}
    </div>
  );
}
