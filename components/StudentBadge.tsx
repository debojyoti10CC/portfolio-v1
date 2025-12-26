"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function StudentBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="https://topmate.io/mohd_harish10"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-pink-400/50 hover:bg-neutral-900 hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]"
    >
      {/* Animated glow effect */}
      <div
        className={`absolute inset-0 rounded-full bg-pink-400/10 blur-md transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Icon with micro animation */}
      <div className="relative z-10">
        <FaGraduationCap
          className={`w-4 h-4 text-pink-400 transition-all duration-300 ${
            isHovered ? "scale-110 rotate-[-5deg]" : ""
          }`}
        />
      </div>

      {/* Text */}
      <span className="relative z-10 text-sm text-neutral-300 group-hover:text-pink-400 transition-colors duration-300">
        For Students
      </span>

      {/* Animated arrow indicator */}
      <span
        className={`relative z-10 text-pink-400 transition-all duration-300 ${
          isHovered ? "translate-x-1 opacity-100" : "translate-x-0 opacity-0"
        }`}
      >
        →
      </span>

      {/* Pulse animation dot */}
      <div
        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-400 transition-opacity duration-300 ${
          isHovered ? "opacity-100 animate-ping" : "opacity-0"
        }`}
      ></div>
    </Link>
  );
}

