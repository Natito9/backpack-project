"use client";

export default function SkipBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-4 md:right-20 z-[60] bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition"
      aria-label="Skip Facts"
    >
      Skip
    </button>
  );
}

