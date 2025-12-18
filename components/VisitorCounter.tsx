"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      // Try multiple APIs with fallbacks
      const apis = [
        {
          url: "https://api.countapi.xyz/hit/mdharish-portfolio/visits",
          parse: (data: { value: number }) => data.value,
        },
        {
          url: "https://api.counterapi.dev/v1/mdharish-portfolio/visits/up",
          parse: (data: { count: number }) => data.count,
        },
      ];

      for (const api of apis) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);

          const response = await fetch(api.url, {
            signal: controller.signal,
            mode: "cors",
          });

          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const count = api.parse(data);
            if (typeof count === "number" && count > 0) {
              setVisitorCount(count);
              setIsLoading(false);
              return;
            }
          }
        } catch {
          // Try next API
          continue;
        }
      }

      // All APIs failed - use localStorage as fallback counter
      try {
        const storedCount = localStorage.getItem("visitor-count");
        const lastVisit = localStorage.getItem("last-visit");
        const today = new Date().toDateString();

        let count = storedCount ? parseInt(storedCount) : 1000; // Start from 1000

        // Only increment if it's a new session (different day or first visit)
        if (lastVisit !== today) {
          count += 1;
          localStorage.setItem("visitor-count", count.toString());
          localStorage.setItem("last-visit", today);
        }

        setVisitorCount(count);
      } catch {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchCount();
  }, []);

  // Helper function to add ordinal suffix (1st, 2nd, 3rd, etc.)
  const getOrdinalSuffix = (num: number): string => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return "th";
    }

    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  if (hasError) {
    return null; // Don't show anything if completely failed
  }

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900">
      {/* Eye Icon */}
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-neutral-400"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Visitor Text */}
      <span className="text-sm text-neutral-400">
        {isLoading ? (
          <span className="animate-pulse">Counting visitors...</span>
        ) : visitorCount !== null ? (
          <>
            You are the{" "}
            <span className="text-pink-400 font-semibold">
              {formatNumber(visitorCount)}
              <sup className="text-xs">{getOrdinalSuffix(visitorCount)}</sup>
            </span>{" "}
            visitor
          </>
        ) : (
          <>
            Welcome,{" "}
            <span className="text-pink-400 font-semibold">visitor</span>!
          </>
        )}
      </span>
    </div>
  );
}
