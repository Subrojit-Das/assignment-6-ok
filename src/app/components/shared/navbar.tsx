import React from "react";
import Link from "next/link";
import NavCounts from "./navCount";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-[#0b0c0f] text-white flex items-center justify-between px-8 container mx-auto">
      <div className="flex items-center gap-2">
        <span className="text-2xl text-lime-400">
          <img
            src="/assets/logo.png"
            alt="FITLOG"
            className="h-8 w-auto"
          />
        </span>
        <h1 className="font-bold tracking-wide">FITLOG</h1>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className="text-gray-400 hover:text-white px-4 py-2 transition-colors"
        >
          Workout
        </Link>
        <Link
          href="/savedPlans"
          className="text-gray-400 hover:text-white px-4 py-2 transition-colors"
        >
          My Plan
        </Link>
      </div>

      <NavCounts />
    </nav>
  );
};

export default Navbar;