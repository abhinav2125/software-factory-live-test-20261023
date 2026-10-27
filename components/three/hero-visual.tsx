"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const FactoryScene = dynamic(
  () => import("@/components/three/factory-scene"),
  {
    ssr: false,
    loading: () => <SceneFallback label="Loading assembly visual" />,
  },
);

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ??
        canvas.getContext("webgl") ??
        canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

function SceneFallback({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`${label}: stacked lavender assembly platform with orbiting modules`}
      className="flex size-full items-center justify-center"
    >
      <svg
        viewBox="0 0 320 240"
        className="h-full max-h-[420px] w-full"
        fill="none"
      >
        <ellipse cx="160" cy="196" rx="110" ry="18" fill="#050308" opacity="0.6" />
        <ellipse cx="160" cy="150" rx="96" ry="22" fill="#1A1526" stroke="#2F2545" />
        <ellipse cx="160" cy="122" rx="72" ry="18" fill="#CBB3E8" />
        <ellipse cx="160" cy="96" rx="46" ry="13" fill="#A67FD4" />
        <path d="M160 44l24 14v28l-24 14-24-14V58l24-14z" fill="#D4FF3F" />
        <circle cx="52" cy="130" r="10" fill="#A67FD4" />
        <circle cx="268" cy="130" r="10" fill="#E34234" />
        <circle cx="92" cy="72" r="8" fill="#D4FF3F" />
        <circle cx="228" cy="72" r="8" fill="#CBB3E8" />
        <ellipse
          cx="160"
          cy="108"
          rx="128"
          ry="34"
          stroke="#CBB3E8"
          strokeOpacity="0.4"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}

export function HeroVisual() {
  const reducedMotion = useReducedMotion() ?? false;
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setWebgl(supportsWebGL()));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-lavender/10 blur-3xl"
      />
      {webgl === null || webgl ? (
        <FactoryScene reducedMotion={reducedMotion} />
      ) : (
        <SceneFallback label="Assembly visual" />
      )}
    </div>
  );
}
