"use client";

import React from "react";
import { Exercise } from "@/types/tecnoTypes";

interface LastOneProps {
  items: Exercise[];
}

export default function LastOne({ items }: LastOneProps) {
  const totalExercises = items.length;

  let totalMinutes = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].duration) {
      totalMinutes = totalMinutes + Number(items[i].duration);
    }
  }

  let totalCalories = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].caloriesBurned) {
      totalCalories = totalCalories + Number(items[i].caloriesBurned);
    }
  }

  return (
    <div className="bg-[#121619] border border-gray-800 rounded-2xl p-6 my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-sm">Exercises</p>
        <p className="text-4xl font-bold text-[#ccff00]">{totalExercises}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-sm">Minutes</p>
        <p className="text-4xl font-bold text-white">{totalMinutes}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-sm">Calories</p>
        <p className="text-4xl font-bold text-white">{totalCalories}</p>
      </div>
    </div>
  );
}