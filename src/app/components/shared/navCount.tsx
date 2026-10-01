"use client";

import React from "react";
import Link from "next/link";
import { useTecno } from "../../context/TecnoContext";

export default function NavCounts() {
  const { planItems, savedItems } = useTecno();

  return (
    <Link href="/savedPlans" className="flex items-center gap-5 text-sm font-medium cursor-pointer">
      <div className="flex items-center gap-2">
        <span className="text-gray-300">Plan</span>
        <span className="w-5 h-5 rounded-full bg-lime-400 text-black text-[11px] font-bold flex items-center justify-center">
          {planItems.length}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-gray-400">Saved</span>
        <span className="w-5 h-5 rounded-full border border-gray-700 text-gray-300 text-[11px] font-bold flex items-center justify-center">
          {savedItems.length}
        </span>
      </div>
    </Link>
  );
}