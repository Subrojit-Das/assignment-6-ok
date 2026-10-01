"use client";

import React from "react";
import { Exercise } from "@/types/tecnoTypes";
import { useTecno } from "@/app/context/TecnoContext";

export default function PlanCardButton({ data }: { data: Exercise }) {
  const { addToPlan } = useTecno();

  function handleAddPlan() {
    addToPlan(data);
  }

  return (
    <button
      onClick={handleAddPlan}
      className="bg-[#ccff00] text-black font-bold text-xs px-6 py-3 rounded-full hover:bg-[#b8e600] transition"
    >
      Add to Todays Plan
    </button>
  );
}