"use client";

import { useEffect, useRef } from "react";
import Sparticles from "sparticles";

export default function BgParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const config = {
      composition: "source-over",
      count: 216,
      speed: 0,
      parallax: 0,
      direction: 180,
      xVariance: 0.5,
      yVariance: 1,
      rotate: true,
      rotation: 0.5,
      alphaSpeed: 10,
      alphaVariance: 1,
      minAlpha: 0,
      maxAlpha: 1,
      minSize: 0.5,
      maxSize: 5,
      style: "fill",
      bounce: false,
      drift: 0,
      glow: 1,
      twinkle: false,
      color: ["#ffffff", "#ffdf9a"],
      shape: "square",
    };

    new Sparticles(containerRef.current, config);
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg fixed inset-0 -z-10"
    />
  );
}
