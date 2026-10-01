"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

interface ExerciseCardButtonsProps {
  itemName: string;
  itemId: number;
  onRemove: (id: number) => void;
}

export default function ExerciseCardButtons({
  itemName,
  itemId,
  onRemove,
}: ExerciseCardButtonsProps) {
  const [isDone, setIsDone] = useState(false);

  function handleDoneClick() {
    setIsDone(true);
    toast.success(`${itemName} marked as done!`);
  }

  function handleRemoveClick() {
    toast.error(`${itemName} removed!`);
    onRemove(itemId);
  }

  return (
    <div className="flex items-center gap-3">
      {isDone ? (
        <button
          disabled
          className="bg-gray-800 text-gray-400 font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#9ca3af"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
          Completed
        </button>
      ) : (
        <button
          onClick={handleDoneClick}
          className="bg-[#ccff00] text-black font-bold text-xs px-5 py-2.5 rounded-full hover:bg-[#b8e600] transition flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#000000"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
          Mark as Done
        </button>
      )}

      <button
        onClick={handleRemoveClick}
        className="p-2 text-gray-400 hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="currentColor"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
    </div>
  );
}