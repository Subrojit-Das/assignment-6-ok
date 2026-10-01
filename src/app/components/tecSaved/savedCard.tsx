"use client";

import React from "react";
import { Exercise } from "@/types/tecnoTypes";
import { useTecno } from "@/app/context/TecnoContext";

export default function SavedCardButton({ data }: { data: Exercise }) {
  const { saveForLater } = useTecno();

  function handleSave() {
    saveForLater(data);
  }

  return (
    <button
      onClick={handleSave}
      className="border border-gray-700 text-white font-bold text-xs px-6 py-3 rounded-full hover:border-white transition"
    >
      Save Plan
    </button>
  );
}