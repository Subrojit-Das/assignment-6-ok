"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTecno } from ".././context/TecnoContext";
import ExerciseCard from "./ExerciseCard";
import LastOne from "./LastOne";
import { removePlanAction } from "../actions/planActions";

export default function SavedPlansClient() {
  const { planItems, savedItems, removeFromPlan, removeFromSaved } = useTecno();

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState("Duration");

  let currentList = planItems;
  if (activeTab === "saved") {
    currentList = savedItems;
  }

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "Rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    if (sortBy === "Calories") {
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    }
    return (b.duration || 0) - (a.duration || 0);
  });

  async function handleRemove(id: number) {
    if (activeTab === "today") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
    await removePlanAction(id, activeTab);
  }

  return (
    <div className="text-white relative">
      <LastOne items={currentList} />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="bg-[#121619] p-1 rounded-2xl flex items-center border border-gray-800">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-5 py-2 rounded-xl text-sm font-semibold ${
              activeTab === "today" ? "bg-[#1c2227] text-white" : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2 rounded-xl text-sm font-semibold ${
              activeTab === "saved" ? "bg-[#1c2227] text-white" : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#121619] border border-gray-800 text-white rounded-xl px-3 py-2 outline-none"
          >
            <option value="Duration">Duration</option>
            <option value="Rating">Rating</option>
            <option value="Calories">Calories</option>
          </select>
        </div>
      </div>

      <div>
        {sortedList.length === 0 ? (
          <div className="border border-dashed border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center py-12">
            <h2 className="text-2xl font-bold mb-2">NOTHING HERE YET</h2>
            <p className="text-gray-400 text-sm mb-6">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="bg-[#ccff00] text-black font-bold text-sm px-6 py-3 rounded-full"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {sortedList.map((item) => (
              <ExerciseCard
                key={item.id}
                item={item}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}