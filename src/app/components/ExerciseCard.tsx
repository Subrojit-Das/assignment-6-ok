import React from "react";
import Link from "next/link";
import { Exercise } from "@/types/tecnoTypes";
import ExerciseCardButtons from "./ExerciseCardButtons";

interface ExerciseCardProps {
  item: Exercise;
  onRemove: (id: number) => void;
}

export default function ExerciseCard({ item, onRemove }: ExerciseCardProps) {
  return (
    <div className="bg-[#121619] border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {item.image && (
          <div className="w-28 h-20 rounded-xl overflow-hidden bg-gray-900 shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div>
          <h3 className="font-bold text-lg text-white">{item.name}</h3>

          <p className="text-xs text-gray-400">
            {item.equipment || item.difficulty || "Bodyweight"}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-300 mt-2">
            {item.duration && (
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="#9ca3af"
                >
                  <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm-99.5 291.5Q275-137 226-186t-77.5-114.5Q120-366 120-440t28.5-139.5Q177-645 226-694t114.5-77.5Q406-800 480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80q-74 0-139.5-28.5ZM678-242q82-82 82-198t-82-198q-82-82-198-82t-198 82q-82 82-82 198t82 198q82 82 198 82t198-82ZM480-440Z" />
                </svg>
                {item.duration} min
              </span>
            )}

            {item.caloriesBurned && (
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="#9ca3af"
                >
                  <path d="M655-80 513-222l56-56 85 85 170-170 56 57L655-80ZM480-470Zm-68 260 89 89q-5 0-10.5.5t-10.5.5q-134 0-227-93t-93-227q0-129 86.5-245T480-880v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-698l18-22q74 42 117 117t43 163h-80q0-25-5-48.5t-14-46q-9-22.5-22.5-42.5T648-614q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-730q-78 66-119.5 140.5T240-440q0 82 48.5 145T412-210Z" />
                </svg>
                {item.caloriesBurned} kcal
              </span>
            )}

            {item.rating && (
              <span className="flex items-center gap-1 text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="#facc15"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
                {item.rating}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/${item.id}`}
          className="border border-gray-700 text-white font-bold text-xs px-5 py-2.5 rounded-full hover:border-white transition"
        >
          View Details
        </Link>

        <ExerciseCardButtons
          itemName={item.name}
          itemId={item.id}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
}